# `appsyncDataSource` Submodule <a name="`appsyncDataSource` Submodule" id="@cdktn/provider-awscc.appsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDataSource <a name="AppsyncDataSource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSource(Construct Scope, string Id, AppsyncDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig">AppsyncDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig">AppsyncDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig">PutDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig">PutElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig">PutEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig">PutHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig">PutOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig">PutRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig">ResetDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig">ResetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig">ResetEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig">ResetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig">ResetOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig">ResetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn">ResetServiceRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDynamoDbConfig` <a name="PutDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig"></a>

```csharp
private void PutDynamoDbConfig(AppsyncDataSourceDynamoDbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `PutElasticsearchConfig` <a name="PutElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig"></a>

```csharp
private void PutElasticsearchConfig(AppsyncDataSourceElasticsearchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `PutEventBridgeConfig` <a name="PutEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig"></a>

```csharp
private void PutEventBridgeConfig(AppsyncDataSourceEventBridgeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `PutHttpConfig` <a name="PutHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig"></a>

```csharp
private void PutHttpConfig(AppsyncDataSourceHttpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig"></a>

```csharp
private void PutLambdaConfig(AppsyncDataSourceLambdaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `PutOpenSearchServiceConfig` <a name="PutOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig"></a>

```csharp
private void PutOpenSearchServiceConfig(AppsyncDataSourceOpenSearchServiceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `PutRelationalDatabaseConfig` <a name="PutRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig"></a>

```csharp
private void PutRelationalDatabaseConfig(AppsyncDataSourceRelationalDatabaseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamoDbConfig` <a name="ResetDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig"></a>

```csharp
private void ResetDynamoDbConfig()
```

##### `ResetElasticsearchConfig` <a name="ResetElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig"></a>

```csharp
private void ResetElasticsearchConfig()
```

##### `ResetEventBridgeConfig` <a name="ResetEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig"></a>

```csharp
private void ResetEventBridgeConfig()
```

##### `ResetHttpConfig` <a name="ResetHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig"></a>

```csharp
private void ResetHttpConfig()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig"></a>

```csharp
private void ResetLambdaConfig()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig"></a>

```csharp
private void ResetMetricsConfig()
```

##### `ResetOpenSearchServiceConfig` <a name="ResetOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig"></a>

```csharp
private void ResetOpenSearchServiceConfig()
```

##### `ResetRelationalDatabaseConfig` <a name="ResetRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig"></a>

```csharp
private void ResetRelationalDatabaseConfig()
```

##### `ResetServiceRoleArn` <a name="ResetServiceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn"></a>

```csharp
private void ResetServiceRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncDataSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncDataSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig">DynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig">EventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig">OpenSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput">DynamoDbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput">ElasticsearchConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput">EventBridgeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput">HttpConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput">OpenSearchServiceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput">RelationalDatabaseConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig">MetricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `DynamoDbConfig`<sup>Required</sup> <a name="DynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig"></a>

```csharp
public AppsyncDataSourceDynamoDbConfigOutputReference DynamoDbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `ElasticsearchConfig`<sup>Required</sup> <a name="ElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig"></a>

```csharp
public AppsyncDataSourceElasticsearchConfigOutputReference ElasticsearchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `EventBridgeConfig`<sup>Required</sup> <a name="EventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig"></a>

```csharp
public AppsyncDataSourceEventBridgeConfigOutputReference EventBridgeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig"></a>

```csharp
public AppsyncDataSourceHttpConfigOutputReference HttpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig"></a>

```csharp
public AppsyncDataSourceLambdaConfigOutputReference LambdaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `OpenSearchServiceConfig`<sup>Required</sup> <a name="OpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig"></a>

```csharp
public AppsyncDataSourceOpenSearchServiceConfigOutputReference OpenSearchServiceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `RelationalDatabaseConfig`<sup>Required</sup> <a name="RelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig"></a>

```csharp
public AppsyncDataSourceRelationalDatabaseConfigOutputReference RelationalDatabaseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DynamoDbConfigInput`<sup>Optional</sup> <a name="DynamoDbConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceDynamoDbConfig DynamoDbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `ElasticsearchConfigInput`<sup>Optional</sup> <a name="ElasticsearchConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceElasticsearchConfig ElasticsearchConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `EventBridgeConfigInput`<sup>Optional</sup> <a name="EventBridgeConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceEventBridgeConfig EventBridgeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `HttpConfigInput`<sup>Optional</sup> <a name="HttpConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfig HttpConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceLambdaConfig LambdaConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput"></a>

```csharp
public string MetricsConfigInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpenSearchServiceConfigInput`<sup>Optional</sup> <a name="OpenSearchServiceConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceOpenSearchServiceConfig OpenSearchServiceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `RelationalDatabaseConfigInput`<sup>Optional</sup> <a name="RelationalDatabaseConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceRelationalDatabaseConfig RelationalDatabaseConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig"></a>

```csharp
public string MetricsConfig { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDataSourceConfig <a name="AppsyncDataSourceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string Name,
    string Type,
    string Description = null,
    AppsyncDataSourceDynamoDbConfig DynamoDbConfig = null,
    AppsyncDataSourceElasticsearchConfig ElasticsearchConfig = null,
    AppsyncDataSourceEventBridgeConfig EventBridgeConfig = null,
    AppsyncDataSourceHttpConfig HttpConfig = null,
    AppsyncDataSourceLambdaConfig LambdaConfig = null,
    string MetricsConfig = null,
    AppsyncDataSourceOpenSearchServiceConfig OpenSearchServiceConfig = null,
    AppsyncDataSourceRelationalDatabaseConfig RelationalDatabaseConfig = null,
    string ServiceRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId">ApiId</a></code> | <code>string</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name">Name</a></code> | <code>string</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type">Type</a></code> | <code>string</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description">Description</a></code> | <code>string</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig">DynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig">EventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig">MetricsConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig">OpenSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `DynamoDbConfig`<sup>Optional</sup> <a name="DynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig"></a>

```csharp
public AppsyncDataSourceDynamoDbConfig DynamoDbConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `ElasticsearchConfig`<sup>Optional</sup> <a name="ElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig"></a>

```csharp
public AppsyncDataSourceElasticsearchConfig ElasticsearchConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `EventBridgeConfig`<sup>Optional</sup> <a name="EventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig"></a>

```csharp
public AppsyncDataSourceEventBridgeConfig EventBridgeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `HttpConfig`<sup>Optional</sup> <a name="HttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig"></a>

```csharp
public AppsyncDataSourceHttpConfig HttpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig"></a>

```csharp
public AppsyncDataSourceLambdaConfig LambdaConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig"></a>

```csharp
public string MetricsConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `OpenSearchServiceConfig`<sup>Optional</sup> <a name="OpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig"></a>

```csharp
public AppsyncDataSourceOpenSearchServiceConfig OpenSearchServiceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `RelationalDatabaseConfig`<sup>Optional</sup> <a name="RelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig"></a>

```csharp
public AppsyncDataSourceRelationalDatabaseConfig RelationalDatabaseConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `ServiceRoleArn`<sup>Optional</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

### AppsyncDataSourceDynamoDbConfig <a name="AppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceDynamoDbConfig {
    string AwsRegion = null,
    AppsyncDataSourceDynamoDbConfigDeltaSyncConfig DeltaSyncConfig = null,
    string TableName = null,
    bool|IResolvable UseCallerCredentials = null,
    bool|IResolvable Versioned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | The DeltaSyncConfig for a versioned datasource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName">TableName</a></code> | <code>string</code> | The table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to TRUE to use AWS Identity and Access Management with this data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned">Versioned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to TRUE to use Conflict Detection and Resolution with this data source. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `DeltaSyncConfig`<sup>Optional</sup> <a name="DeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig"></a>

```csharp
public AppsyncDataSourceDynamoDbConfigDeltaSyncConfig DeltaSyncConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

The DeltaSyncConfig for a versioned datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#delta_sync_config AppsyncDataSource#delta_sync_config}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#table_name AppsyncDataSource#table_name}

---

##### `UseCallerCredentials`<sup>Optional</sup> <a name="UseCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials"></a>

```csharp
public bool|IResolvable UseCallerCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to TRUE to use AWS Identity and Access Management with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#use_caller_credentials AppsyncDataSource#use_caller_credentials}

---

##### `Versioned`<sup>Optional</sup> <a name="Versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned"></a>

```csharp
public bool|IResolvable Versioned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to TRUE to use Conflict Detection and Resolution with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#versioned AppsyncDataSource#versioned}

---

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceDynamoDbConfigDeltaSyncConfig {
    string BaseTableTtl = null,
    string DeltaSyncTableName = null,
    string DeltaSyncTableTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl">BaseTableTtl</a></code> | <code>string</code> | The number of minutes that an Item is stored in the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>string</code> | The Delta Sync table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>string</code> | The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. |

---

##### `BaseTableTtl`<sup>Optional</sup> <a name="BaseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```csharp
public string BaseTableTtl { get; set; }
```

- *Type:* string

The number of minutes that an Item is stored in the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#base_table_ttl AppsyncDataSource#base_table_ttl}

---

##### `DeltaSyncTableName`<sup>Optional</sup> <a name="DeltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```csharp
public string DeltaSyncTableName { get; set; }
```

- *Type:* string

The Delta Sync table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#delta_sync_table_name AppsyncDataSource#delta_sync_table_name}

---

##### `DeltaSyncTableTtl`<sup>Optional</sup> <a name="DeltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```csharp
public string DeltaSyncTableTtl { get; set; }
```

- *Type:* string

The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#delta_sync_table_ttl AppsyncDataSource#delta_sync_table_ttl}

---

### AppsyncDataSourceElasticsearchConfig <a name="AppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceElasticsearchConfig {
    string AwsRegion = null,
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceEventBridgeConfig <a name="AppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceEventBridgeConfig {
    string EventBusArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | ARN for the EventBridge bus. |

---

##### `EventBusArn`<sup>Optional</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#event_bus_arn AppsyncDataSource#event_bus_arn}

---

### AppsyncDataSourceHttpConfig <a name="AppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfig {
    AppsyncDataSourceHttpConfigAuthorizationConfig AuthorizationConfig = null,
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | The authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig"></a>

```csharp
public AppsyncDataSourceHttpConfigAuthorizationConfig AuthorizationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

The authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#authorization_config AppsyncDataSource#authorization_config}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceHttpConfigAuthorizationConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfigAuthorizationConfig {
    string AuthorizationType = null,
    AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | The authorization type that the HTTP endpoint requires. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | The AWS Identity and Access Management settings. |

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

The authorization type that the HTTP endpoint requires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#authorization_type AppsyncDataSource#authorization_type}

---

##### `AwsIamConfig`<sup>Optional</sup> <a name="AwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```csharp
public AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

The AWS Identity and Access Management settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_iam_config AppsyncDataSource#aws_iam_config}

---

### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    string SigningRegion = null,
    string SigningServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">SigningRegion</a></code> | <code>string</code> | The signing Region for AWS Identity and Access Management authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">SigningServiceName</a></code> | <code>string</code> | The signing service name for AWS Identity and Access Management authorization. |

---

##### `SigningRegion`<sup>Optional</sup> <a name="SigningRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```csharp
public string SigningRegion { get; set; }
```

- *Type:* string

The signing Region for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#signing_region AppsyncDataSource#signing_region}

---

##### `SigningServiceName`<sup>Optional</sup> <a name="SigningServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```csharp
public string SigningServiceName { get; set; }
```

- *Type:* string

The signing service name for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#signing_service_name AppsyncDataSource#signing_service_name}

---

### AppsyncDataSourceLambdaConfig <a name="AppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceLambdaConfig {
    string LambdaFunctionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | The ARN for the Lambda function. |

---

##### `LambdaFunctionArn`<sup>Optional</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; set; }
```

- *Type:* string

The ARN for the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#lambda_function_arn AppsyncDataSource#lambda_function_arn}

---

### AppsyncDataSourceOpenSearchServiceConfig <a name="AppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceOpenSearchServiceConfig {
    string AwsRegion = null,
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceRelationalDatabaseConfig <a name="AppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceRelationalDatabaseConfig {
    AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig RdsHttpEndpointConfig = null,
    string RelationalDatabaseSourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig">RdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | Information about the Amazon RDS resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType">RelationalDatabaseSourceType</a></code> | <code>string</code> | The type of relational data source. |

---

##### `RdsHttpEndpointConfig`<sup>Optional</sup> <a name="RdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

```csharp
public AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig RdsHttpEndpointConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

Information about the Amazon RDS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#rds_http_endpoint_config AppsyncDataSource#rds_http_endpoint_config}

---

##### `RelationalDatabaseSourceType`<sup>Optional</sup> <a name="RelationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

```csharp
public string RelationalDatabaseSourceType { get; set; }
```

- *Type:* string

The type of relational data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#relational_database_source_type AppsyncDataSource#relational_database_source_type}

---

### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    string AwsRegion = null,
    string AwsSecretStoreArn = null,
    string DatabaseName = null,
    string DbClusterIdentifier = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | AWS Region for RDS HTTP endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>string</code> | The ARN for database credentials stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Logical database name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | Amazon RDS cluster Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema">Schema</a></code> | <code>string</code> | Logical schema name. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

AWS Region for RDS HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `AwsSecretStoreArn`<sup>Optional</sup> <a name="AwsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

```csharp
public string AwsSecretStoreArn { get; set; }
```

- *Type:* string

The ARN for database credentials stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#aws_secret_store_arn AppsyncDataSource#aws_secret_store_arn}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Logical database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#database_name AppsyncDataSource#database_name}

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

Amazon RDS cluster Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#db_cluster_identifier AppsyncDataSource#db_cluster_identifier}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Logical schema name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_data_source#schema AppsyncDataSource#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">ResetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName">ResetDeltaSyncTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">ResetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseTableTtl` <a name="ResetBaseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```csharp
private void ResetBaseTableTtl()
```

##### `ResetDeltaSyncTableName` <a name="ResetDeltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName"></a>

```csharp
private void ResetDeltaSyncTableName()
```

##### `ResetDeltaSyncTableTtl` <a name="ResetDeltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```csharp
private void ResetDeltaSyncTableTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">BaseTableTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">DeltaSyncTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">DeltaSyncTableTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">BaseTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseTableTtlInput`<sup>Optional</sup> <a name="BaseTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```csharp
public string BaseTableTtlInput { get; }
```

- *Type:* string

---

##### `DeltaSyncTableNameInput`<sup>Optional</sup> <a name="DeltaSyncTableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```csharp
public string DeltaSyncTableNameInput { get; }
```

- *Type:* string

---

##### `DeltaSyncTableTtlInput`<sup>Optional</sup> <a name="DeltaSyncTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```csharp
public string DeltaSyncTableTtlInput { get; }
```

- *Type:* string

---

##### `BaseTableTtl`<sup>Required</sup> <a name="BaseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```csharp
public string BaseTableTtl { get; }
```

- *Type:* string

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```csharp
public string DeltaSyncTableName { get; }
```

- *Type:* string

---

##### `DeltaSyncTableTtl`<sup>Required</sup> <a name="DeltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```csharp
public string DeltaSyncTableTtl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceDynamoDbConfigDeltaSyncConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### AppsyncDataSourceDynamoDbConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceDynamoDbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig">PutDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig">ResetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials">ResetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned">ResetVersioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaSyncConfig` <a name="PutDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig"></a>

```csharp
private void PutDeltaSyncConfig(AppsyncDataSourceDynamoDbConfigDeltaSyncConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetDeltaSyncConfig` <a name="ResetDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig"></a>

```csharp
private void ResetDeltaSyncConfig()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetUseCallerCredentials` <a name="ResetUseCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials"></a>

```csharp
private void ResetUseCallerCredentials()
```

##### `ResetVersioned` <a name="ResetVersioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned"></a>

```csharp
private void ResetVersioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput">DeltaSyncConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput">UseCallerCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput">VersionedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">Versioned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaSyncConfig`<sup>Required</sup> <a name="DeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```csharp
public AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference DeltaSyncConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `DeltaSyncConfigInput`<sup>Optional</sup> <a name="DeltaSyncConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceDynamoDbConfigDeltaSyncConfig DeltaSyncConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `UseCallerCredentialsInput`<sup>Optional</sup> <a name="UseCallerCredentialsInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput"></a>

```csharp
public bool|IResolvable UseCallerCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VersionedInput`<sup>Optional</sup> <a name="VersionedInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput"></a>

```csharp
public bool|IResolvable VersionedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `UseCallerCredentials`<sup>Required</sup> <a name="UseCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```csharp
public bool|IResolvable UseCallerCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Versioned`<sup>Required</sup> <a name="Versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```csharp
public bool|IResolvable Versioned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceDynamoDbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---


### AppsyncDataSourceElasticsearchConfigOutputReference <a name="AppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceElasticsearchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceElasticsearchConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---


### AppsyncDataSourceEventBridgeConfigOutputReference <a name="AppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceEventBridgeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn">ResetEventBusArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventBusArn` <a name="ResetEventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn"></a>

```csharp
private void ResetEventBusArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceEventBridgeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">ResetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">ResetSigningServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSigningRegion` <a name="ResetSigningRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```csharp
private void ResetSigningRegion()
```

##### `ResetSigningServiceName` <a name="ResetSigningServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```csharp
private void ResetSigningServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">SigningRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">SigningServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">SigningRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">SigningServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SigningRegionInput`<sup>Optional</sup> <a name="SigningRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```csharp
public string SigningRegionInput { get; }
```

- *Type:* string

---

##### `SigningServiceNameInput`<sup>Optional</sup> <a name="SigningServiceNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```csharp
public string SigningServiceNameInput { get; }
```

- *Type:* string

---

##### `SigningRegion`<sup>Required</sup> <a name="SigningRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```csharp
public string SigningRegion { get; }
```

- *Type:* string

---

##### `SigningServiceName`<sup>Required</sup> <a name="SigningServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```csharp
public string SigningServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">PutAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">ResetAwsIamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIamConfig` <a name="PutAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```csharp
private void PutAwsIamConfig(AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAwsIamConfig` <a name="ResetAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```csharp
private void ResetAwsIamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">AwsIamConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIamConfig`<sup>Required</sup> <a name="AwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```csharp
public AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference AwsIamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AwsIamConfigInput`<sup>Optional</sup> <a name="AwsIamConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDataSourceHttpConfigOutputReference <a name="AppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceHttpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```csharp
private void PutAuthorizationConfig(AppsyncDataSourceHttpConfigAuthorizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```csharp
private void ResetAuthorizationConfig()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```csharp
public AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfig AuthorizationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceHttpConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---


### AppsyncDataSourceLambdaConfigOutputReference <a name="AppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceLambdaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn">ResetLambdaFunctionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaFunctionArn` <a name="ResetLambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn"></a>

```csharp
private void ResetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput"></a>

```csharp
public string LambdaFunctionArnInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceLambdaConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---


### AppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="AppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceOpenSearchServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceOpenSearchServiceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceRelationalDatabaseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig">PutRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig">ResetRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType">ResetRelationalDatabaseSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRdsHttpEndpointConfig` <a name="PutRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig"></a>

```csharp
private void PutRdsHttpEndpointConfig(AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `ResetRdsHttpEndpointConfig` <a name="ResetRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig"></a>

```csharp
private void ResetRdsHttpEndpointConfig()
```

##### `ResetRelationalDatabaseSourceType` <a name="ResetRelationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType"></a>

```csharp
private void ResetRelationalDatabaseSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">RdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput">RdsHttpEndpointConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput">RelationalDatabaseSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">RelationalDatabaseSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RdsHttpEndpointConfig`<sup>Required</sup> <a name="RdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```csharp
public AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference RdsHttpEndpointConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `RdsHttpEndpointConfigInput`<sup>Optional</sup> <a name="RdsHttpEndpointConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput"></a>

```csharp
public IResolvable|AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig RdsHttpEndpointConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `RelationalDatabaseSourceTypeInput`<sup>Optional</sup> <a name="RelationalDatabaseSourceTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput"></a>

```csharp
public string RelationalDatabaseSourceTypeInput { get; }
```

- *Type:* string

---

##### `RelationalDatabaseSourceType`<sup>Required</sup> <a name="RelationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```csharp
public string RelationalDatabaseSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceRelationalDatabaseConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn">ResetAwsSecretStoreArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier">ResetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetAwsSecretStoreArn` <a name="ResetAwsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn"></a>

```csharp
private void ResetAwsSecretStoreArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier"></a>

```csharp
private void ResetDbClusterIdentifier()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">AwsSecretStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `AwsSecretStoreArnInput`<sup>Optional</sup> <a name="AwsSecretStoreArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```csharp
public string AwsSecretStoreArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```csharp
public string AwsSecretStoreArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



