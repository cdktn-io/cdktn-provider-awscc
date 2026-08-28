# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-awscc.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpoint(Construct Scope, string Id, DmsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings">PutDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings">PutDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">PutElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings">PutGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings">PutIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings">PutKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings">PutKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings">PutMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings">PutMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings">PutMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings">PutNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings">PutOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings">PutPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings">PutRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings">PutS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings">PutSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings">ResetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings">ResetDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">ResetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier">ResetEndpointIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">ResetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings">ResetGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings">ResetIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings">ResetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings">ResetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings">ResetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings">ResetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings">ResetMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings">ResetNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings">ResetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings">ResetPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings">ResetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings">ResetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings">ResetSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDocDbSettings` <a name="PutDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings"></a>

```csharp
private void PutDocDbSettings(DmsEndpointDocDbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `PutDynamoDbSettings` <a name="PutDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings"></a>

```csharp
private void PutDynamoDbSettings(DmsEndpointDynamoDbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `PutElasticsearchSettings` <a name="PutElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```csharp
private void PutElasticsearchSettings(DmsEndpointElasticsearchSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `PutGcpMySqlSettings` <a name="PutGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings"></a>

```csharp
private void PutGcpMySqlSettings(DmsEndpointGcpMySqlSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `PutIbmDb2Settings` <a name="PutIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings"></a>

```csharp
private void PutIbmDb2Settings(DmsEndpointIbmDb2Settings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `PutKafkaSettings` <a name="PutKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```csharp
private void PutKafkaSettings(DmsEndpointKafkaSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `PutKinesisSettings` <a name="PutKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```csharp
private void PutKinesisSettings(DmsEndpointKinesisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `PutMicrosoftSqlServerSettings` <a name="PutMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings"></a>

```csharp
private void PutMicrosoftSqlServerSettings(DmsEndpointMicrosoftSqlServerSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `PutMongoDbSettings` <a name="PutMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings"></a>

```csharp
private void PutMongoDbSettings(DmsEndpointMongoDbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `PutMySqlSettings` <a name="PutMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings"></a>

```csharp
private void PutMySqlSettings(DmsEndpointMySqlSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `PutNeptuneSettings` <a name="PutNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings"></a>

```csharp
private void PutNeptuneSettings(DmsEndpointNeptuneSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```csharp
private void PutOracleSettings(DmsEndpointOracleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `PutPostgreSqlSettings` <a name="PutPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings"></a>

```csharp
private void PutPostgreSqlSettings(DmsEndpointPostgreSqlSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `PutRedisSettings` <a name="PutRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```csharp
private void PutRedisSettings(DmsEndpointRedisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```csharp
private void PutRedshiftSettings(DmsEndpointRedshiftSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `PutS3Settings` <a name="PutS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```csharp
private void PutS3Settings(DmsEndpointS3Settings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `PutSybaseSettings` <a name="PutSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings"></a>

```csharp
private void PutSybaseSettings(DmsEndpointSybaseSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|DmsEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDocDbSettings` <a name="ResetDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings"></a>

```csharp
private void ResetDocDbSettings()
```

##### `ResetDynamoDbSettings` <a name="ResetDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings"></a>

```csharp
private void ResetDynamoDbSettings()
```

##### `ResetElasticsearchSettings` <a name="ResetElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```csharp
private void ResetElasticsearchSettings()
```

##### `ResetEndpointIdentifier` <a name="ResetEndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier"></a>

```csharp
private void ResetEndpointIdentifier()
```

##### `ResetExtraConnectionAttributes` <a name="ResetExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```csharp
private void ResetExtraConnectionAttributes()
```

##### `ResetGcpMySqlSettings` <a name="ResetGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings"></a>

```csharp
private void ResetGcpMySqlSettings()
```

##### `ResetIbmDb2Settings` <a name="ResetIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings"></a>

```csharp
private void ResetIbmDb2Settings()
```

##### `ResetKafkaSettings` <a name="ResetKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```csharp
private void ResetKafkaSettings()
```

##### `ResetKinesisSettings` <a name="ResetKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```csharp
private void ResetKinesisSettings()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMicrosoftSqlServerSettings` <a name="ResetMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings"></a>

```csharp
private void ResetMicrosoftSqlServerSettings()
```

##### `ResetMongoDbSettings` <a name="ResetMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings"></a>

```csharp
private void ResetMongoDbSettings()
```

##### `ResetMySqlSettings` <a name="ResetMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings"></a>

```csharp
private void ResetMySqlSettings()
```

##### `ResetNeptuneSettings` <a name="ResetNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings"></a>

```csharp
private void ResetNeptuneSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```csharp
private void ResetOracleSettings()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPostgreSqlSettings` <a name="ResetPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings"></a>

```csharp
private void ResetPostgreSqlSettings()
```

##### `ResetRedisSettings` <a name="ResetRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```csharp
private void ResetRedisSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```csharp
private void ResetRedshiftSettings()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetS3Settings` <a name="ResetS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```csharp
private void ResetS3Settings()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetSybaseSettings` <a name="ResetSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings"></a>

```csharp
private void ResetSybaseSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings">NeptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings">SybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput">DocDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput">DynamoDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">ElasticsearchSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput">EndpointIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput">EngineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">ExtraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput">GcpMySqlSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput">IbmDb2SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">KafkaSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">KinesisSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput">MicrosoftSqlServerSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput">MongoDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput">MySqlSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput">NeptuneSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput">PostgreSqlSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">RedisSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">S3SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput">SybaseSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings"></a>

```csharp
public DmsEndpointDocDbSettingsOutputReference DocDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a>

---

##### `DynamoDbSettings`<sup>Required</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings"></a>

```csharp
public DmsEndpointDynamoDbSettingsOutputReference DynamoDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettingsOutputReference ElasticsearchSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `GcpMySqlSettings`<sup>Required</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings"></a>

```csharp
public DmsEndpointGcpMySqlSettingsOutputReference GcpMySqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `IbmDb2Settings`<sup>Required</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings"></a>

```csharp
public DmsEndpointIbmDb2SettingsOutputReference IbmDb2Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettingsOutputReference KafkaSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettingsOutputReference KinesisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings"></a>

```csharp
public DmsEndpointMicrosoftSqlServerSettingsOutputReference MicrosoftSqlServerSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings"></a>

```csharp
public DmsEndpointMongoDbSettingsOutputReference MongoDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a>

---

##### `MySqlSettings`<sup>Required</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings"></a>

```csharp
public DmsEndpointMySqlSettingsOutputReference MySqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a>

---

##### `NeptuneSettings`<sup>Required</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings"></a>

```csharp
public DmsEndpointNeptuneSettingsOutputReference NeptuneSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```csharp
public DmsEndpointOracleSettingsOutputReference OracleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `PostgreSqlSettings`<sup>Required</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings"></a>

```csharp
public DmsEndpointPostgreSqlSettingsOutputReference PostgreSqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettingsOutputReference RedisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettingsOutputReference RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```csharp
public DmsEndpointS3SettingsOutputReference S3Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `SybaseSettings`<sup>Required</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings"></a>

```csharp
public DmsEndpointSybaseSettingsOutputReference SybaseSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags"></a>

```csharp
public DmsEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DocDbSettingsInput`<sup>Optional</sup> <a name="DocDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointDocDbSettings DocDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `DynamoDbSettingsInput`<sup>Optional</sup> <a name="DynamoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointDynamoDbSettings DynamoDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `ElasticsearchSettingsInput`<sup>Optional</sup> <a name="ElasticsearchSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointElasticsearchSettings ElasticsearchSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `EndpointIdentifierInput`<sup>Optional</sup> <a name="EndpointIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput"></a>

```csharp
public string EndpointIdentifierInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```csharp
public string EngineNameInput { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributesInput`<sup>Optional</sup> <a name="ExtraConnectionAttributesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```csharp
public string ExtraConnectionAttributesInput { get; }
```

- *Type:* string

---

##### `GcpMySqlSettingsInput`<sup>Optional</sup> <a name="GcpMySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointGcpMySqlSettings GcpMySqlSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `IbmDb2SettingsInput`<sup>Optional</sup> <a name="IbmDb2SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput"></a>

```csharp
public IResolvable|DmsEndpointIbmDb2Settings IbmDb2SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `KafkaSettingsInput`<sup>Optional</sup> <a name="KafkaSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointKafkaSettings KafkaSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `KinesisSettingsInput`<sup>Optional</sup> <a name="KinesisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointKinesisSettings KinesisSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftSqlServerSettingsInput`<sup>Optional</sup> <a name="MicrosoftSqlServerSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointMicrosoftSqlServerSettings MicrosoftSqlServerSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `MongoDbSettingsInput`<sup>Optional</sup> <a name="MongoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointMongoDbSettings MongoDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `MySqlSettingsInput`<sup>Optional</sup> <a name="MySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointMySqlSettings MySqlSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `NeptuneSettingsInput`<sup>Optional</sup> <a name="NeptuneSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointNeptuneSettings NeptuneSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointOracleSettings OracleSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PostgreSqlSettingsInput`<sup>Optional</sup> <a name="PostgreSqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointPostgreSqlSettings PostgreSqlSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `RedisSettingsInput`<sup>Optional</sup> <a name="RedisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointRedisSettings RedisSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointRedshiftSettings RedshiftSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `S3SettingsInput`<sup>Optional</sup> <a name="S3SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```csharp
public IResolvable|DmsEndpointS3Settings S3SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `SybaseSettingsInput`<sup>Optional</sup> <a name="SybaseSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput"></a>

```csharp
public IResolvable|DmsEndpointSybaseSettings SybaseSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|DmsEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EndpointIdentifier`<sup>Required</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier"></a>

```csharp
public string EndpointIdentifier { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointType,
    string EngineName,
    string CertificateArn = null,
    string DatabaseName = null,
    DmsEndpointDocDbSettings DocDbSettings = null,
    DmsEndpointDynamoDbSettings DynamoDbSettings = null,
    DmsEndpointElasticsearchSettings ElasticsearchSettings = null,
    string EndpointIdentifier = null,
    string ExtraConnectionAttributes = null,
    DmsEndpointGcpMySqlSettings GcpMySqlSettings = null,
    DmsEndpointIbmDb2Settings IbmDb2Settings = null,
    DmsEndpointKafkaSettings KafkaSettings = null,
    DmsEndpointKinesisSettings KinesisSettings = null,
    string KmsKeyId = null,
    DmsEndpointMicrosoftSqlServerSettings MicrosoftSqlServerSettings = null,
    DmsEndpointMongoDbSettings MongoDbSettings = null,
    DmsEndpointMySqlSettings MySqlSettings = null,
    DmsEndpointNeptuneSettings NeptuneSettings = null,
    DmsEndpointOracleSettings OracleSettings = null,
    string Password = null,
    double Port = null,
    DmsEndpointPostgreSqlSettings PostgreSqlSettings = null,
    DmsEndpointRedisSettings RedisSettings = null,
    DmsEndpointRedshiftSettings RedshiftSettings = null,
    string ResourceIdentifier = null,
    DmsEndpointS3Settings S3Settings = null,
    string ServerName = null,
    string SslMode = null,
    DmsEndpointSybaseSettings SybaseSettings = null,
    IResolvable|DmsEndpointTags[] Tags = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | The type of endpoint. Valid values are source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName">EngineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the EndpointType value. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | Settings in JSON format for the source and target MySQL endpoin. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings">NeptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password">Password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port">Port</a></code> | <code>double</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName">ServerName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode">SslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings">SybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username">Username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

The type of endpoint. Valid values are source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```csharp
public string EngineName { get; set; }
```

- *Type:* string

The type of engine for the endpoint, depending on the EndpointType value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the endpoint database.

For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `DocDbSettings`<sup>Optional</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings"></a>

```csharp
public DmsEndpointDocDbSettings DocDbSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

Settings in JSON format for the source and target DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#doc_db_settings DmsEndpoint#doc_db_settings}

---

##### `DynamoDbSettings`<sup>Optional</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings"></a>

```csharp
public DmsEndpointDynamoDbSettings DynamoDbSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

Settings in JSON format for the target Amazon DynamoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#dynamo_db_settings DmsEndpoint#dynamo_db_settings}

---

##### `ElasticsearchSettings`<sup>Optional</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettings ElasticsearchSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

Settings in JSON format for the target OpenSearch endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `EndpointIdentifier`<sup>Optional</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier"></a>

```csharp
public string EndpointIdentifier { get; set; }
```

- *Type:* string

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#endpoint_identifier DmsEndpoint#endpoint_identifier}

---

##### `ExtraConnectionAttributes`<sup>Optional</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; set; }
```

- *Type:* string

Additional attributes associated with the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}

---

##### `GcpMySqlSettings`<sup>Optional</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings"></a>

```csharp
public DmsEndpointGcpMySqlSettings GcpMySqlSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

Settings in JSON format for the source GCP MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#gcp_my_sql_settings DmsEndpoint#gcp_my_sql_settings}

---

##### `IbmDb2Settings`<sup>Optional</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings"></a>

```csharp
public DmsEndpointIbmDb2Settings IbmDb2Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

Settings in JSON format for the source IBM Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ibm_db_2_settings DmsEndpoint#ibm_db_2_settings}

---

##### `KafkaSettings`<sup>Optional</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettings KafkaSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

Settings in JSON format for the target Apache Kafka endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `KinesisSettings`<sup>Optional</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettings KinesisSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#kms_key_id DmsEndpoint#kms_key_id}

---

##### `MicrosoftSqlServerSettings`<sup>Optional</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings"></a>

```csharp
public DmsEndpointMicrosoftSqlServerSettings MicrosoftSqlServerSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#microsoft_sql_server_settings DmsEndpoint#microsoft_sql_server_settings}

---

##### `MongoDbSettings`<sup>Optional</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings"></a>

```csharp
public DmsEndpointMongoDbSettings MongoDbSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

Settings in JSON format for the source MongoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#mongo_db_settings DmsEndpoint#mongo_db_settings}

---

##### `MySqlSettings`<sup>Optional</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings"></a>

```csharp
public DmsEndpointMySqlSettings MySqlSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

Settings in JSON format for the source and target MySQL endpoin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#my_sql_settings DmsEndpoint#my_sql_settings}

---

##### `NeptuneSettings`<sup>Optional</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings"></a>

```csharp
public DmsEndpointNeptuneSettings NeptuneSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

Settings in JSON format for the target Amazon Neptune endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#neptune_settings DmsEndpoint#neptune_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```csharp
public DmsEndpointOracleSettings OracleSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

Settings in JSON format for the source and target Oracle endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `PostgreSqlSettings`<sup>Optional</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings"></a>

```csharp
public DmsEndpointPostgreSqlSettings PostgreSqlSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

Settings in JSON format for the source and target PostgreSQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#postgre_sql_settings DmsEndpoint#postgre_sql_settings}

---

##### `RedisSettings`<sup>Optional</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettings RedisSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

Settings in JSON format for the target Redis endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettings RedshiftSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

Settings in JSON format for the Amazon Redshift endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#resource_identifier DmsEndpoint#resource_identifier}

---

##### `S3Settings`<sup>Optional</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```csharp
public DmsEndpointS3Settings S3Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

Settings in JSON format for the source and target Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

The name of the server where the endpoint database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}

---

##### `SybaseSettings`<sup>Optional</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings"></a>

```csharp
public DmsEndpointSybaseSettings SybaseSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

Settings in JSON format for the source and target SAP ASE endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#sybase_settings DmsEndpoint#sybase_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```csharp
public IResolvable|DmsEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

One or more tags to be assigned to the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointDocDbSettings <a name="DmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointDocDbSettings {
    double DocsToInvestigate = null,
    bool|IResolvable ExtractDocId = null,
    string NestingLevel = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>double</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId">ExtractDocId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate"></a>

```csharp
public double DocsToInvestigate { get; set; }
```

- *Type:* double

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId"></a>

```csharp
public bool|IResolvable ExtractDocId { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; set; }
```

- *Type:* string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointDynamoDbSettings <a name="DmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointDynamoDbSettings {
    string ServiceAccessRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointElasticsearchSettings {
    string EndpointUri = null,
    double ErrorRetryDuration = null,
    double FullLoadErrorPercentage = null,
    string ServiceAccessRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">EndpointUri</a></code> | <code>string</code> | The endpoint for the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | The maximum percentage of records that can fail to be written before a full load operation stops. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `EndpointUri`<sup>Optional</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```csharp
public string EndpointUri { get; set; }
```

- *Type:* string

The endpoint for the OpenSearch cluster.

AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; set; }
```

- *Type:* double

The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `FullLoadErrorPercentage`<sup>Optional</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; set; }
```

- *Type:* double

The maximum percentage of records that can fail to be written before a full load operation stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointGcpMySqlSettings <a name="DmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointGcpMySqlSettings {
    string AfterConnectScript = null,
    bool|IResolvable CleanSourceMetadataOnMismatch = null,
    string DatabaseName = null,
    double EventsPollInterval = null,
    double MaxFileSize = null,
    double ParallelLoadThreads = null,
    string Password = null,
    double Port = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string ServerName = null,
    string ServerTimezone = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password">Password</a></code> | <code>string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port">Port</a></code> | <code>double</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName">ServerName</a></code> | <code>string</code> | The MySQL host name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username">Username</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `CleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster.

If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Database name for the endpoint.

For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `EventsPollInterval`<sup>Optional</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; set; }
```

- *Type:* double

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParallelLoadThreads`<sup>Optional</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; set; }
```

- *Type:* double

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

The MySQL host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `ServerTimezone`<sup>Optional</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; set; }
```

- *Type:* string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointIbmDb2Settings <a name="DmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointIbmDb2Settings {
    string CurrentLsn = null,
    bool|IResolvable KeepCsvFiles = null,
    double LoadTimeout = null,
    double MaxFileSize = null,
    double MaxKBytesPerRead = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    bool|IResolvable SetDataCaptureChanges = null,
    double WriteBufferSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn">CurrentLsn</a></code> | <code>string</code> | For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>double</code> | Maximum number of bytes per read, as a NUMBER value. The default is 64 KB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables ongoing replication (CDC) as a BOOLEAN value. The default is true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB). |

---

##### `CurrentLsn`<sup>Optional</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn"></a>

```csharp
public string CurrentLsn { get; set; }
```

- *Type:* string

For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#current_lsn DmsEndpoint#current_lsn}

---

##### `KeepCsvFiles`<sup>Optional</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles"></a>

```csharp
public bool|IResolvable KeepCsvFiles { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#keep_csv_files DmsEndpoint#keep_csv_files}

---

##### `LoadTimeout`<sup>Optional</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; set; }
```

- *Type:* double

The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target.

The default value is 1200 (20 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `MaxKBytesPerRead`<sup>Optional</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

```csharp
public double MaxKBytesPerRead { get; set; }
```

- *Type:* double

Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_k_bytes_per_read DmsEndpoint#max_k_bytes_per_read}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SetDataCaptureChanges`<sup>Optional</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

```csharp
public bool|IResolvable SetDataCaptureChanges { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#set_data_capture_changes DmsEndpoint#set_data_capture_changes}

---

##### `WriteBufferSize`<sup>Optional</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; set; }
```

- *Type:* double

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointKafkaSettings {
    string Broker = null,
    bool|IResolvable IncludeControlDetails = null,
    bool|IResolvable IncludeNullAndEmpty = null,
    bool|IResolvable IncludePartitionValue = null,
    bool|IResolvable IncludeTableAlterOperations = null,
    bool|IResolvable IncludeTransactionDetails = null,
    string MessageFormat = null,
    double MessageMaxBytes = null,
    bool|IResolvable NoHexPrefix = null,
    bool|IResolvable PartitionIncludeSchemaTable = null,
    string SaslPassword = null,
    string SaslUserName = null,
    string SecurityProtocol = null,
    string SslCaCertificateArn = null,
    string SslClientCertificateArn = null,
    string SslClientKeyArn = null,
    string SslClientKeyPassword = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">Broker</a></code> | <code>string</code> | A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | The maximum size in bytes for records created on the endpoint The default is 1,000,000. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">SaslPassword</a></code> | <code>string</code> | The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName">SaslUserName</a></code> | <code>string</code> | The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | The password for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">Topic</a></code> | <code>string</code> | The topic to which you migrate the data. |

---

##### `Broker`<sup>Optional</sup> <a name="Broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```csharp
public string Broker { get; set; }
```

- *Type:* string

A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance.

Specify each broker location in the form broker-hostname-or-ip:port

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Provides detailed transaction information from the source database.

This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; set; }
```

- *Type:* double

The maximum size in bytes for records created on the endpoint The default is 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `SaslPassword`<sup>Optional</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```csharp
public string SaslPassword { get; set; }
```

- *Type:* string

The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}

---

##### `SaslUserName`<sup>Optional</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName"></a>

```csharp
public string SaslUserName { get; set; }
```

- *Type:* string

The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#sasl_user_name DmsEndpoint#sasl_user_name}

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).

Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `SslClientCertificateArn`<sup>Optional</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}

---

##### `SslClientKeyArn`<sup>Optional</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}

---

##### `SslClientKeyPassword`<sup>Optional</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; set; }
```

- *Type:* string

The password for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The topic to which you migrate the data.

If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointKinesisSettings {
    bool|IResolvable IncludeControlDetails = null,
    bool|IResolvable IncludeNullAndEmpty = null,
    bool|IResolvable IncludePartitionValue = null,
    bool|IResolvable IncludeTableAlterOperations = null,
    bool|IResolvable IncludeTransactionDetails = null,
    string MessageFormat = null,
    bool|IResolvable NoHexPrefix = null,
    bool|IResolvable PartitionIncludeSchemaTable = null,
    string ServiceAccessRoleArn = null,
    string StreamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">StreamArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint. |

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Provides detailed transaction information from the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}

---

### DmsEndpointMicrosoftSqlServerSettings <a name="DmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMicrosoftSqlServerSettings {
    double BcpPacketSize = null,
    string ControlTablesFileGroup = null,
    string DatabaseName = null,
    bool|IResolvable ForceLobLookup = null,
    string Password = null,
    double Port = null,
    bool|IResolvable QuerySingleAlwaysOnNode = null,
    bool|IResolvable ReadBackupOnly = null,
    string SafeguardPolicy = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string ServerName = null,
    string TlogAccessMode = null,
    bool|IResolvable TrimSpaceInChar = null,
    bool|IResolvable UseBcpFullLoad = null,
    string Username = null,
    bool|IResolvable UseThirdPartyBackupDevice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize">BcpPacketSize</a></code> | <code>double</code> | The maximum size of the packets (in bytes) used to transfer data using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>string</code> | Specifies a file group for the AWS DMS internal tables. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup">ForceLobLookup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Forces LOB lookup on inline LOB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password">Password</a></code> | <code>string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port">Port</a></code> | <code>double</code> | Endpoint TCP port. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly">ReadBackupOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>string</code> | Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName">ServerName</a></code> | <code>string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode">TlogAccessMode</a></code> | <code>string</code> | Indicates the mode used to fetch CDC data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use this to attribute to transfer data for full-load operations using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username">Username</a></code> | <code>string</code> | Endpoint connection user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format. |

---

##### `BcpPacketSize`<sup>Optional</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

```csharp
public double BcpPacketSize { get; set; }
```

- *Type:* double

The maximum size of the packets (in bytes) used to transfer data using BCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#bcp_packet_size DmsEndpoint#bcp_packet_size}

---

##### `ControlTablesFileGroup`<sup>Optional</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

```csharp
public string ControlTablesFileGroup { get; set; }
```

- *Type:* string

Specifies a file group for the AWS DMS internal tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#control_tables_file_group DmsEndpoint#control_tables_file_group}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `ForceLobLookup`<sup>Optional</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup"></a>

```csharp
public bool|IResolvable ForceLobLookup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Forces LOB lookup on inline LOB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#force_lob_lookup DmsEndpoint#force_lob_lookup}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Endpoint TCP port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `QuerySingleAlwaysOnNode`<sup>Optional</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode"></a>

```csharp
public bool|IResolvable QuerySingleAlwaysOnNode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#query_single_always_on_node DmsEndpoint#query_single_always_on_node}

---

##### `ReadBackupOnly`<sup>Optional</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

```csharp
public bool|IResolvable ReadBackupOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication.

Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#read_backup_only DmsEndpoint#read_backup_only}

---

##### `SafeguardPolicy`<sup>Optional</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

```csharp
public string SafeguardPolicy { get; set; }
```

- *Type:* string

Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#safeguard_policy DmsEndpoint#safeguard_policy}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Fully qualified domain name of the endpoint.

For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `TlogAccessMode`<sup>Optional</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode"></a>

```csharp
public string TlogAccessMode { get; set; }
```

- *Type:* string

Indicates the mode used to fetch CDC data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#tlog_access_mode DmsEndpoint#tlog_access_mode}

---

##### `TrimSpaceInChar`<sup>Optional</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar"></a>

```csharp
public bool|IResolvable TrimSpaceInChar { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration.

Setting TrimSpaceInChar does not left-trim data. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}

---

##### `UseBcpFullLoad`<sup>Optional</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

```csharp
public bool|IResolvable UseBcpFullLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use this to attribute to transfer data for full-load operations using BCP.

When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_bcp_full_load DmsEndpoint#use_bcp_full_load}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Endpoint connection user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

##### `UseThirdPartyBackupDevice`<sup>Optional</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice"></a>

```csharp
public bool|IResolvable UseThirdPartyBackupDevice { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_third_party_backup_device DmsEndpoint#use_third_party_backup_device}

---

### DmsEndpointMongoDbSettings <a name="DmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMongoDbSettings {
    string AuthMechanism = null,
    string AuthSource = null,
    string AuthType = null,
    string DatabaseName = null,
    string DocsToInvestigate = null,
    string ExtractDocId = null,
    string NestingLevel = null,
    string Password = null,
    double Port = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string ServerName = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | The authentication mechanism you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource">AuthSource</a></code> | <code>string</code> | The MongoDB database name. This setting isn't used when AuthType is set to "no". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType">AuthType</a></code> | <code>string</code> | The authentication type you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password">Password</a></code> | <code>string</code> | The password for the user account you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port">Port</a></code> | <code>double</code> | The port value for the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName">ServerName</a></code> | <code>string</code> | The name of the server on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username">Username</a></code> | <code>string</code> | The user name you use to access the MongoDB source endpoint. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; set; }
```

- *Type:* string

The authentication mechanism you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource"></a>

```csharp
public string AuthSource { get; set; }
```

- *Type:* string

The MongoDB database name. This setting isn't used when AuthType is set to "no".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication type you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The database name on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; set; }
```

- *Type:* string

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; set; }
```

- *Type:* string

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; set; }
```

- *Type:* string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the user account you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port value for the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

The name of the server on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointMySqlSettings <a name="DmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMySqlSettings {
    string AfterConnectScript = null,
    bool|IResolvable CleanSourceMetadataOnMismatch = null,
    double EventsPollInterval = null,
    double MaxFileSize = null,
    double ParallelLoadThreads = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string ServerTimezone = null,
    string TargetDbType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType">TargetDbType</a></code> | <code>string</code> | Specifies where to migrate source tables on the target, either to a single database or multiple databases. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `CleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `EventsPollInterval`<sup>Optional</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; set; }
```

- *Type:* double

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParallelLoadThreads`<sup>Optional</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; set; }
```

- *Type:* double

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerTimezone`<sup>Optional</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; set; }
```

- *Type:* string

Specifies the time zone for the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `TargetDbType`<sup>Optional</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType"></a>

```csharp
public string TargetDbType { get; set; }
```

- *Type:* string

Specifies where to migrate source tables on the target, either to a single database or multiple databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}

---

### DmsEndpointNeptuneSettings <a name="DmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointNeptuneSettings {
    double ErrorRetryDuration = null,
    bool|IResolvable IamAuthEnabled = null,
    double MaxFileSize = null,
    double MaxRetryCount = null,
    string S3BucketFolder = null,
    string S3BucketName = null,
    string ServiceAccessRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you want IAM authorization enabled for this endpoint, set this parameter to true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount">MaxRetryCount</a></code> | <code>double</code> | The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder">S3BucketFolder</a></code> | <code>string</code> | A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. |

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; set; }
```

- *Type:* double

The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error.

The default is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `IamAuthEnabled`<sup>Optional</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled"></a>

```csharp
public bool|IResolvable IamAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you want IAM authorization enabled for this endpoint, set this parameter to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#iam_auth_enabled DmsEndpoint#iam_auth_enabled}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount"></a>

```csharp
public double MaxRetryCount { get; set; }
```

- *Type:* double

The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error.

The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_retry_count DmsEndpoint#max_retry_count}

---

##### `S3BucketFolder`<sup>Optional</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder"></a>

```csharp
public string S3BucketFolder { get; set; }
```

- *Type:* string

A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#s3_bucket_folder DmsEndpoint#s3_bucket_folder}

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#s3_bucket_name DmsEndpoint#s3_bucket_name}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointOracleSettings {
    bool|IResolvable AccessAlternateDirectly = null,
    double AdditionalArchivedLogDestId = null,
    bool|IResolvable AddSupplementalLogging = null,
    bool|IResolvable AllowSelectNestedTables = null,
    double ArchivedLogDestId = null,
    bool|IResolvable ArchivedLogsOnly = null,
    string AsmPassword = null,
    string AsmServer = null,
    string AsmUser = null,
    string CharLengthSemantics = null,
    bool|IResolvable DirectPathNoLog = null,
    bool|IResolvable DirectPathParallelLoad = null,
    bool|IResolvable EnableHomogenousTablespace = null,
    double[] ExtraArchivedLogDestIds = null,
    bool|IResolvable FailTasksOnLobTruncation = null,
    double NumberDatatypeScale = null,
    string OraclePathPrefix = null,
    double ParallelAsmReadThreads = null,
    double ReadAheadBlocks = null,
    bool|IResolvable ReadTableSpaceName = null,
    bool|IResolvable ReplacePathPrefix = null,
    double RetryInterval = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerOracleAsmAccessRoleArn = null,
    string SecretsManagerOracleAsmSecretId = null,
    string SecretsManagerSecretId = null,
    string SecurityDbEncryption = null,
    string SecurityDbEncryptionName = null,
    string SpatialDataOptionToGeoJsonFunctionName = null,
    double StandbyDelayTime = null,
    bool|IResolvable UseAlternateFolderForOnline = null,
    bool|IResolvable UseBFile = null,
    bool|IResolvable UseDirectPathFullLoad = null,
    bool|IResolvable UseLogminerReader = null,
    string UsePathPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>double</code> | Set this attribute with ArchivedLogDestId in a primary/ standby setup. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to set up table-level supplemental logging for the Oracle database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>double</code> | Specifies the ID of the destination for the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When this field is set to True, AWS DMS only accesses the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">AsmPassword</a></code> | <code>string</code> | For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">AsmServer</a></code> | <code>string</code> | For an Oracle source endpoint, your ASM server address. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">AsmUser</a></code> | <code>string</code> | For an Oracle source endpoint, your ASM user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>string</code> | Specifies whether the length of a character column is in bytes or in characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">DirectPathNoLog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>double[]</code> | Specifies the IDs of one more destinations for one or more archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>double</code> | Specifies the number scale. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>double</code> | Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>double</code> | Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this attribute supports tablespace replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">RetryInterval</a></code> | <code>double</code> | Specifies the number of seconds that the system waits before resending a query. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>string</code> | For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>string</code> | For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | Use this attribute to convert SDO_GEOMETRY to GEOJSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>double</code> | Use this attribute to specify a time in minutes for the delay in standby sync. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile">UseBFile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Binary Reader utility. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to True to have AWS DMS use a direct path full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">UseLogminerReader</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Oracle LogMiner utility (the default). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">UsePathPrefix</a></code> | <code>string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |

---

##### `AccessAlternateDirectly`<sup>Optional</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```csharp
public bool|IResolvable AccessAlternateDirectly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}

---

##### `AdditionalArchivedLogDestId`<sup>Optional</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```csharp
public double AdditionalArchivedLogDestId { get; set; }
```

- *Type:* double

Set this attribute with ArchivedLogDestId in a primary/ standby setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}

---

##### `AddSupplementalLogging`<sup>Optional</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```csharp
public bool|IResolvable AddSupplementalLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to set up table-level supplemental logging for the Oracle database.

This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}

---

##### `AllowSelectNestedTables`<sup>Optional</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables"></a>

```csharp
public bool|IResolvable AllowSelectNestedTables { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#allow_select_nested_tables DmsEndpoint#allow_select_nested_tables}

---

##### `ArchivedLogDestId`<sup>Optional</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```csharp
public double ArchivedLogDestId { get; set; }
```

- *Type:* double

Specifies the ID of the destination for the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}

---

##### `ArchivedLogsOnly`<sup>Optional</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```csharp
public bool|IResolvable ArchivedLogsOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When this field is set to True, AWS DMS only accesses the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}

---

##### `AsmPassword`<sup>Optional</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```csharp
public string AsmPassword { get; set; }
```

- *Type:* string

For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```csharp
public string AsmServer { get; set; }
```

- *Type:* string

For an Oracle source endpoint, your ASM server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}

---

##### `AsmUser`<sup>Optional</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```csharp
public string AsmUser { get; set; }
```

- *Type:* string

For an Oracle source endpoint, your ASM user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}

---

##### `CharLengthSemantics`<sup>Optional</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```csharp
public string CharLengthSemantics { get; set; }
```

- *Type:* string

Specifies whether the length of a character column is in bytes or in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}

---

##### `DirectPathNoLog`<sup>Optional</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```csharp
public bool|IResolvable DirectPathNoLog { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}

---

##### `DirectPathParallelLoad`<sup>Optional</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```csharp
public bool|IResolvable DirectPathParallelLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}

---

##### `EnableHomogenousTablespace`<sup>Optional</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespace { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}

---

##### `ExtraArchivedLogDestIds`<sup>Optional</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```csharp
public double[] ExtraArchivedLogDestIds { get; set; }
```

- *Type:* double[]

Specifies the IDs of one more destinations for one or more archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}

---

##### `FailTasksOnLobTruncation`<sup>Optional</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `NumberDatatypeScale`<sup>Optional</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```csharp
public double NumberDatatypeScale { get; set; }
```

- *Type:* double

Specifies the number scale.

You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}

---

##### `OraclePathPrefix`<sup>Optional</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```csharp
public string OraclePathPrefix { get; set; }
```

- *Type:* string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}

---

##### `ParallelAsmReadThreads`<sup>Optional</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```csharp
public double ParallelAsmReadThreads { get; set; }
```

- *Type:* double

Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}

---

##### `ReadAheadBlocks`<sup>Optional</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```csharp
public double ReadAheadBlocks { get; set; }
```

- *Type:* double

Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}

---

##### `ReadTableSpaceName`<sup>Optional</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```csharp
public bool|IResolvable ReadTableSpaceName { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this attribute supports tablespace replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}

---

##### `ReplacePathPrefix`<sup>Optional</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```csharp
public bool|IResolvable ReplacePathPrefix { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}

---

##### `RetryInterval`<sup>Optional</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```csharp
public double RetryInterval { get; set; }
```

- *Type:* double

Specifies the number of seconds that the system waits before resending a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; set; }
```

- *Type:* string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; set; }
```

- *Type:* string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SecurityDbEncryption`<sup>Optional</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```csharp
public string SecurityDbEncryption { get; set; }
```

- *Type:* string

For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}

---

##### `SecurityDbEncryptionName`<sup>Optional</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```csharp
public string SecurityDbEncryptionName { get; set; }
```

- *Type:* string

For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionName { get; set; }
```

- *Type:* string

Use this attribute to convert SDO_GEOMETRY to GEOJSON format.

By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}

---

##### `StandbyDelayTime`<sup>Optional</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```csharp
public double StandbyDelayTime { get; set; }
```

- *Type:* double

Use this attribute to specify a time in minutes for the delay in standby sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}

---

##### `UseAlternateFolderForOnline`<sup>Optional</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}

---

##### `UseBFile`<sup>Optional</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile"></a>

```csharp
public bool|IResolvable UseBFile { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to True to capture change data using the Binary Reader utility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_b_file DmsEndpoint#use_b_file}

---

##### `UseDirectPathFullLoad`<sup>Optional</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to True to have AWS DMS use a direct path full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}

---

##### `UseLogminerReader`<sup>Optional</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```csharp
public bool|IResolvable UseLogminerReader { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}

---

##### `UsePathPrefix`<sup>Optional</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```csharp
public string UsePathPrefix { get; set; }
```

- *Type:* string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}

---

### DmsEndpointPostgreSqlSettings <a name="DmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointPostgreSqlSettings {
    string AfterConnectScript = null,
    string BabelfishDatabaseName = null,
    bool|IResolvable CaptureDdls = null,
    string DatabaseMode = null,
    string DdlArtifactsSchema = null,
    double ExecuteTimeout = null,
    bool|IResolvable FailTasksOnLobTruncation = null,
    bool|IResolvable HeartbeatEnable = null,
    double HeartbeatFrequency = null,
    string HeartbeatSchema = null,
    bool|IResolvable MapBooleanAsBoolean = null,
    double MaxFileSize = null,
    string PluginName = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string SlotName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | The Babelfish for Aurora PostgreSQL database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls">CaptureDdls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | The schema in which the operational DDL database artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | Sets the WAL heartbeat frequency (in minutes). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | Sets the schema in which the heartbeat artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, lets PostgreSQL migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the plugin to use to create a replication slot. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName">SlotName</a></code> | <code>string</code> | Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `BabelfishDatabaseName`<sup>Optional</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; set; }
```

- *Type:* string

The Babelfish for Aurora PostgreSQL database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}

---

##### `CaptureDdls`<sup>Optional</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls"></a>

```csharp
public bool|IResolvable CaptureDdls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.

You can later remove these artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}

---

##### `DatabaseMode`<sup>Optional</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; set; }
```

- *Type:* string

Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}

---

##### `DdlArtifactsSchema`<sup>Optional</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; set; }
```

- *Type:* string

The schema in which the operational DDL database artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}

---

##### `ExecuteTimeout`<sup>Optional</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; set; }
```

- *Type:* double

Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}

---

##### `FailTasksOnLobTruncation`<sup>Optional</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `HeartbeatEnable`<sup>Optional</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable"></a>

```csharp
public bool|IResolvable HeartbeatEnable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}

---

##### `HeartbeatFrequency`<sup>Optional</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; set; }
```

- *Type:* double

Sets the WAL heartbeat frequency (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}

---

##### `HeartbeatSchema`<sup>Optional</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; set; }
```

- *Type:* string

Sets the schema in which the heartbeat artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}

---

##### `MapBooleanAsBoolean`<sup>Optional</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, lets PostgreSQL migrate the boolean type as boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the plugin to use to create a replication slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SlotName`<sup>Optional</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName"></a>

```csharp
public string SlotName { get; set; }
```

- *Type:* string

Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointRedisSettings {
    string AuthPassword = null,
    string AuthType = null,
    string AuthUserName = null,
    double Port = null,
    string ServerName = null,
    string SslCaCertificateArn = null,
    string SslSecurityProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">AuthPassword</a></code> | <code>string</code> | The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType">AuthType</a></code> | <code>string</code> | The type of authentication to perform when connecting to a Redis target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">AuthUserName</a></code> | <code>string</code> | The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port">Port</a></code> | <code>double</code> | Transmission Control Protocol (TCP) port for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">ServerName</a></code> | <code>string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption. |

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```csharp
public string AuthPassword { get; set; }
```

- *Type:* string

The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The type of authentication to perform when connecting to a Redis target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `AuthUserName`<sup>Optional</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```csharp
public string AuthUserName { get; set; }
```

- *Type:* string

The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Transmission Control Protocol (TCP) port for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Fully qualified domain name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `SslSecurityProtocol`<sup>Optional</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; set; }
```

- *Type:* string

The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointRedshiftSettings {
    bool|IResolvable AcceptAnyDate = null,
    string AfterConnectScript = null,
    string BucketFolder = null,
    string BucketName = null,
    bool|IResolvable CaseSensitiveNames = null,
    bool|IResolvable CompUpdate = null,
    double ConnectionTimeout = null,
    string DateFormat = null,
    bool|IResolvable EmptyAsNull = null,
    string EncryptionMode = null,
    bool|IResolvable ExplicitIds = null,
    double FileTransferUploadStreams = null,
    double LoadTimeout = null,
    bool|IResolvable MapBooleanAsBoolean = null,
    double MaxFileSize = null,
    bool|IResolvable RemoveQuotes = null,
    string ReplaceChars = null,
    string ReplaceInvalidChars = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null,
    string ServerSideEncryptionKmsKeyId = null,
    string ServiceAccessRoleArn = null,
    string TimeFormat = null,
    bool|IResolvable TrimBlanks = null,
    bool|IResolvable TruncateColumns = null,
    double WriteBufferSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | Code to run after connecting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate">CompUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat">DateFormat</a></code> | <code>string</code> | The date format that you are using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull">EmptyAsNull</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds">ExplicitIds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This setting is only valid for a full-load migration task. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>double</code> | The number of threads used to upload a single file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, lets Redshift migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes">RemoveQuotes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that specifies to remove surrounding quotation marks from strings in the incoming data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars">ReplaceChars</a></code> | <code>string</code> | A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>string</code> | A list of characters that you want to replace. Use with ReplaceChars. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat">TimeFormat</a></code> | <code>string</code> | The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks">TrimBlanks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that specifies to remove the trailing white space characters from a VARCHAR string. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns">TruncateColumns</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB). |

---

##### `AcceptAnyDate`<sup>Optional</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate"></a>

```csharp
public bool|IResolvable AcceptAnyDate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error.

You can choose true or false (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#accept_any_date DmsEndpoint#accept_any_date}

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

Code to run after connecting.

This parameter should contain the code itself, not the name of a file containing the code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#case_sensitive_names DmsEndpoint#case_sensitive_names}

---

##### `CompUpdate`<sup>Optional</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate"></a>

```csharp
public bool|IResolvable CompUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#comp_update DmsEndpoint#comp_update}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#connection_timeout DmsEndpoint#connection_timeout}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat"></a>

```csharp
public string DateFormat { get; set; }
```

- *Type:* string

The date format that you are using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#date_format DmsEndpoint#date_format}

---

##### `EmptyAsNull`<sup>Optional</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull"></a>

```csharp
public bool|IResolvable EmptyAsNull { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL.

A value of true sets empty CHAR and VARCHAR fields to null. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#empty_as_null DmsEndpoint#empty_as_null}

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `ExplicitIds`<sup>Optional</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds"></a>

```csharp
public bool|IResolvable ExplicitIds { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This setting is only valid for a full-load migration task.

Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#explicit_ids DmsEndpoint#explicit_ids}

---

##### `FileTransferUploadStreams`<sup>Optional</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

```csharp
public double FileTransferUploadStreams { get; set; }
```

- *Type:* double

The number of threads used to upload a single file.

This parameter accepts a value from 1 through 64. It defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#file_transfer_upload_streams DmsEndpoint#file_transfer_upload_streams}

---

##### `LoadTimeout`<sup>Optional</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; set; }
```

- *Type:* double

The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `MapBooleanAsBoolean`<sup>Optional</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, lets Redshift migrate the boolean type as boolean.

By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `RemoveQuotes`<sup>Optional</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes"></a>

```csharp
public bool|IResolvable RemoveQuotes { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that specifies to remove surrounding quotation marks from strings in the incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#remove_quotes DmsEndpoint#remove_quotes}

---

##### `ReplaceChars`<sup>Optional</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars"></a>

```csharp
public string ReplaceChars { get; set; }
```

- *Type:* string

A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead.

The default is "?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#replace_chars DmsEndpoint#replace_chars}

---

##### `ReplaceInvalidChars`<sup>Optional</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars"></a>

```csharp
public string ReplaceInvalidChars { get; set; }
```

- *Type:* string

A list of characters that you want to replace. Use with ReplaceChars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#replace_invalid_chars DmsEndpoint#replace_invalid_chars}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat"></a>

```csharp
public string TimeFormat { get; set; }
```

- *Type:* string

The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#time_format DmsEndpoint#time_format}

---

##### `TrimBlanks`<sup>Optional</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks"></a>

```csharp
public bool|IResolvable TrimBlanks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that specifies to remove the trailing white space characters from a VARCHAR string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#trim_blanks DmsEndpoint#trim_blanks}

---

##### `TruncateColumns`<sup>Optional</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns"></a>

```csharp
public bool|IResolvable TruncateColumns { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#truncate_columns DmsEndpoint#truncate_columns}

---

##### `WriteBufferSize`<sup>Optional</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; set; }
```

- *Type:* double

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointS3Settings {
    bool|IResolvable AddColumnName = null,
    bool|IResolvable AddTrailingPaddingCharacter = null,
    string BucketFolder = null,
    string BucketName = null,
    string CannedAclForObjects = null,
    bool|IResolvable CdcInsertsAndUpdates = null,
    bool|IResolvable CdcInsertsOnly = null,
    double CdcMaxBatchInterval = null,
    double CdcMinFileSize = null,
    string CdcPath = null,
    string CompressionType = null,
    string CsvDelimiter = null,
    string CsvNoSupValue = null,
    string CsvNullValue = null,
    string CsvRowDelimiter = null,
    string DataFormat = null,
    double DataPageSize = null,
    string DatePartitionDelimiter = null,
    bool|IResolvable DatePartitionEnabled = null,
    string DatePartitionSequence = null,
    string DatePartitionTimezone = null,
    double DictPageSizeLimit = null,
    bool|IResolvable EnableStatistics = null,
    string EncodingType = null,
    string EncryptionMode = null,
    string ExpectedBucketOwner = null,
    string ExternalTableDefinition = null,
    bool|IResolvable GlueCatalogGeneration = null,
    double IgnoreHeaderRows = null,
    bool|IResolvable IncludeOpForFullLoad = null,
    double MaxFileSize = null,
    bool|IResolvable ParquetTimestampInMillisecond = null,
    string ParquetVersion = null,
    bool|IResolvable PreserveTransactions = null,
    bool|IResolvable Rfc4180 = null,
    double RowGroupLength = null,
    string ServerSideEncryptionKmsKeyId = null,
    string ServiceAccessRoleArn = null,
    string TimestampColumnName = null,
    bool|IResolvable UseCsvNoSupValue = null,
    bool|IResolvable UseTaskStartTimeForFullLoadTimestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">AddColumnName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">CdcPath</a></code> | <code>string</code> | Specifies the folder path of CDC files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">CompressionType</a></code> | <code>string</code> | An optional parameter. When set to GZIP it enables the service to compress the target files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">DataFormat</a></code> | <code>string</code> | The format of the data that you want to use for output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | The size of one data page in bytes. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | Specifies a date separating delimiter to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | Identifies the sequence of the date format to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>string</code> | When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | The maximum size of an encoded dictionary page of a column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">EnableStatistics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that enables statistics for Parquet pages and row groups. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">EncodingType</a></code> | <code>string</code> | The type of encoding that you're using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | The external table definition. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, allows AWS Glue to catalog your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">PreserveTransactions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">Rfc4180</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | The number of rows in a row group. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. |

---

##### `AddColumnName`<sup>Optional</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```csharp
public bool|IResolvable AddColumnName { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#add_column_name DmsEndpoint#add_column_name}

---

##### `AddTrailingPaddingCharacter`<sup>Optional</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter"></a>

```csharp
public bool|IResolvable AddTrailingPaddingCharacter { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#add_trailing_padding_character DmsEndpoint#add_trailing_padding_character}

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

An optional parameter to set a folder name in the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `CannedAclForObjects`<sup>Optional</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; set; }
```

- *Type:* string

A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}

---

##### `CdcInsertsAndUpdates`<sup>Optional</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```csharp
public bool|IResolvable CdcInsertsAndUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}

---

##### `CdcInsertsOnly`<sup>Optional</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```csharp
public bool|IResolvable CdcInsertsOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}

---

##### `CdcMaxBatchInterval`<sup>Optional</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; set; }
```

- *Type:* double

Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}

---

##### `CdcMinFileSize`<sup>Optional</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; set; }
```

- *Type:* double

Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}

---

##### `CdcPath`<sup>Optional</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```csharp
public string CdcPath { get; set; }
```

- *Type:* string

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#cdc_path DmsEndpoint#cdc_path}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

An optional parameter. When set to GZIP it enables the service to compress the target files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}

---

##### `CsvDelimiter`<sup>Optional</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; set; }
```

- *Type:* string

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}

---

##### `CsvNoSupValue`<sup>Optional</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; set; }
```

- *Type:* string

This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}

---

##### `CsvNullValue`<sup>Optional</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; set; }
```

- *Type:* string

An optional parameter that specifies how AWS DMS treats null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}

---

##### `CsvRowDelimiter`<sup>Optional</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; set; }
```

- *Type:* string

The delimiter used to separate rows in the .csv file for both source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

The format of the data that you want to use for output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}

---

##### `DataPageSize`<sup>Optional</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; set; }
```

- *Type:* double

The size of one data page in bytes.

This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#data_page_size DmsEndpoint#data_page_size}

---

##### `DatePartitionDelimiter`<sup>Optional</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; set; }
```

- *Type:* string

Specifies a date separating delimiter to use during folder partitioning.

The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}

---

##### `DatePartitionEnabled`<sup>Optional</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```csharp
public bool|IResolvable DatePartitionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this parameter partitions S3 bucket folders based on transaction commit dates.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}

---

##### `DatePartitionSequence`<sup>Optional</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; set; }
```

- *Type:* string

Identifies the sequence of the date format to use during folder partitioning.

The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}

---

##### `DatePartitionTimezone`<sup>Optional</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone"></a>

```csharp
public string DatePartitionTimezone { get; set; }
```

- *Type:* string

When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#date_partition_timezone DmsEndpoint#date_partition_timezone}

---

##### `DictPageSizeLimit`<sup>Optional</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; set; }
```

- *Type:* double

The maximum size of an encoded dictionary page of a column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}

---

##### `EnableStatistics`<sup>Optional</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```csharp
public bool|IResolvable EnableStatistics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that enables statistics for Parquet pages and row groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```csharp
public string EncodingType { get; set; }
```

- *Type:* string

The type of encoding that you're using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#encoding_type DmsEndpoint#encoding_type}

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#expected_bucket_owner DmsEndpoint#expected_bucket_owner}

---

##### `ExternalTableDefinition`<sup>Optional</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; set; }
```

- *Type:* string

The external table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}

---

##### `GlueCatalogGeneration`<sup>Optional</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration"></a>

```csharp
public bool|IResolvable GlueCatalogGeneration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, allows AWS Glue to catalog your S3 bucket.

Creating an AWS Glue catalog lets you use Athena to query your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#glue_catalog_generation DmsEndpoint#glue_catalog_generation}

---

##### `IgnoreHeaderRows`<sup>Optional</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; set; }
```

- *Type:* double

When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}

---

##### `IncludeOpForFullLoad`<sup>Optional</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```csharp
public bool|IResolvable IncludeOpForFullLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParquetTimestampInMillisecond`<sup>Optional</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```csharp
public bool|IResolvable ParquetTimestampInMillisecond { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}

---

##### `ParquetVersion`<sup>Optional</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; set; }
```

- *Type:* string

The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}

---

##### `PreserveTransactions`<sup>Optional</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```csharp
public bool|IResolvable PreserveTransactions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}

---

##### `Rfc4180`<sup>Optional</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```csharp
public bool|IResolvable Rfc4180 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}

---

##### `RowGroupLength`<sup>Optional</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; set; }
```

- *Type:* double

The number of rows in a row group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#row_group_length DmsEndpoint#row_group_length}

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID.

The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `TimestampColumnName`<sup>Optional</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; set; }
```

- *Type:* string

A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}

---

##### `UseCsvNoSupValue`<sup>Optional</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```csharp
public bool|IResolvable UseCsvNoSupValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public bool|IResolvable UseTaskStartTimeForFullLoadTimestamp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}

---

### DmsEndpointSybaseSettings <a name="DmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointSybaseSettings {
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details. |

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointTags <a name="DmsEndpointTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key">Key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value">Value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A key is the required name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#key DmsEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A value is the optional value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_endpoint#value DmsEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointDocDbSettingsOutputReference <a name="DmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointDocDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate">ResetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId">ResetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel">ResetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate"></a>

```csharp
private void ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId"></a>

```csharp
private void ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel"></a>

```csharp
private void ResetNestingLevel()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```csharp
public double DocsToInvestigateInput { get; }
```

- *Type:* double

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput"></a>

```csharp
public bool|IResolvable ExtractDocIdInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput"></a>

```csharp
public string NestingLevelInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public double DocsToInvestigate { get; }
```

- *Type:* double

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```csharp
public bool|IResolvable ExtractDocId { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointDocDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---


### DmsEndpointDynamoDbSettingsOutputReference <a name="DmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointDynamoDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointDynamoDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---


### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri">ResetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">ResetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">ResetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointUri` <a name="ResetEndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri"></a>

```csharp
private void ResetEndpointUri()
```

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```csharp
private void ResetErrorRetryDuration()
```

##### `ResetFullLoadErrorPercentage` <a name="ResetFullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```csharp
private void ResetFullLoadErrorPercentage()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">EndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">FullLoadErrorPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```csharp
public string EndpointUriInput { get; }
```

- *Type:* string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```csharp
public double ErrorRetryDurationInput { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentageInput`<sup>Optional</sup> <a name="FullLoadErrorPercentageInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```csharp
public double FullLoadErrorPercentageInput { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointElasticsearchSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointGcpMySqlSettingsOutputReference <a name="DmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointGcpMySqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">ResetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval">ResetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads">ResetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone">ResetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetCleanSourceMetadataOnMismatch` <a name="ResetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```csharp
private void ResetCleanSourceMetadataOnMismatch()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetEventsPollInterval` <a name="ResetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```csharp
private void ResetEventsPollInterval()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParallelLoadThreads` <a name="ResetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```csharp
private void ResetParallelLoadThreads()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetServerTimezone` <a name="ResetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone"></a>

```csharp
private void ResetServerTimezone()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">CleanSourceMetadataOnMismatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput">EventsPollIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput">ParallelLoadThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput">ServerTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EventsPollIntervalInput`<sup>Optional</sup> <a name="EventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```csharp
public double EventsPollIntervalInput { get; }
```

- *Type:* double

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParallelLoadThreadsInput`<sup>Optional</sup> <a name="ParallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```csharp
public double ParallelLoadThreadsInput { get; }
```

- *Type:* double

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServerTimezoneInput`<sup>Optional</sup> <a name="ServerTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```csharp
public string ServerTimezoneInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; }
```

- *Type:* double

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointGcpMySqlSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---


### DmsEndpointIbmDb2SettingsOutputReference <a name="DmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointIbmDb2SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn">ResetCurrentLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles">ResetKeepCsvFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout">ResetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead">ResetMaxKBytesPerRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges">ResetSetDataCaptureChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize">ResetWriteBufferSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrentLsn` <a name="ResetCurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn"></a>

```csharp
private void ResetCurrentLsn()
```

##### `ResetKeepCsvFiles` <a name="ResetKeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles"></a>

```csharp
private void ResetKeepCsvFiles()
```

##### `ResetLoadTimeout` <a name="ResetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout"></a>

```csharp
private void ResetLoadTimeout()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetMaxKBytesPerRead` <a name="ResetMaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead"></a>

```csharp
private void ResetMaxKBytesPerRead()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetSetDataCaptureChanges` <a name="ResetSetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges"></a>

```csharp
private void ResetSetDataCaptureChanges()
```

##### `ResetWriteBufferSize` <a name="ResetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize"></a>

```csharp
private void ResetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput">CurrentLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput">KeepCsvFilesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput">LoadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput">MaxKBytesPerReadInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput">SetDataCaptureChangesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput">WriteBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">CurrentLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentLsnInput`<sup>Optional</sup> <a name="CurrentLsnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput"></a>

```csharp
public string CurrentLsnInput { get; }
```

- *Type:* string

---

##### `KeepCsvFilesInput`<sup>Optional</sup> <a name="KeepCsvFilesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput"></a>

```csharp
public bool|IResolvable KeepCsvFilesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadTimeoutInput`<sup>Optional</sup> <a name="LoadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput"></a>

```csharp
public double LoadTimeoutInput { get; }
```

- *Type:* double

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `MaxKBytesPerReadInput`<sup>Optional</sup> <a name="MaxKBytesPerReadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput"></a>

```csharp
public double MaxKBytesPerReadInput { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `SetDataCaptureChangesInput`<sup>Optional</sup> <a name="SetDataCaptureChangesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput"></a>

```csharp
public bool|IResolvable SetDataCaptureChangesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WriteBufferSizeInput`<sup>Optional</sup> <a name="WriteBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput"></a>

```csharp
public double WriteBufferSizeInput { get; }
```

- *Type:* double

---

##### `CurrentLsn`<sup>Required</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```csharp
public string CurrentLsn { get; }
```

- *Type:* string

---

##### `KeepCsvFiles`<sup>Required</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```csharp
public bool|IResolvable KeepCsvFiles { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MaxKBytesPerRead`<sup>Required</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```csharp
public double MaxKBytesPerRead { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SetDataCaptureChanges`<sup>Required</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```csharp
public bool|IResolvable SetDataCaptureChanges { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointIbmDb2Settings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker">ResetBroker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">ResetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">ResetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">ResetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName">ResetSaslUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">ResetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">ResetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">ResetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBroker` <a name="ResetBroker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker"></a>

```csharp
private void ResetBroker()
```

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```csharp
private void ResetMessageMaxBytes()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```csharp
private void ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetSaslPassword` <a name="ResetSaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```csharp
private void ResetSaslPassword()
```

##### `ResetSaslUserName` <a name="ResetSaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName"></a>

```csharp
private void ResetSaslUserName()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslClientCertificateArn` <a name="ResetSslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```csharp
private void ResetSslClientCertificateArn()
```

##### `ResetSslClientKeyArn` <a name="ResetSslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```csharp
private void ResetSslClientKeyArn()
```

##### `ResetSslClientKeyPassword` <a name="ResetSslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```csharp
private void ResetSslClientKeyPassword()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">BrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">SaslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput">SaslUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">SslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">SslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">SslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName">SaslUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerInput`<sup>Optional</sup> <a name="BrokerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```csharp
public string BrokerInput { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public bool|IResolvable IncludeControlDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public bool|IResolvable IncludeNullAndEmptyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public bool|IResolvable IncludePartitionValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public bool|IResolvable IncludeTransactionDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```csharp
public double MessageMaxBytesInput { get; }
```

- *Type:* double

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```csharp
public bool|IResolvable NoHexPrefixInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SaslPasswordInput`<sup>Optional</sup> <a name="SaslPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```csharp
public string SaslPasswordInput { get; }
```

- *Type:* string

---

##### `SaslUserNameInput`<sup>Optional</sup> <a name="SaslUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput"></a>

```csharp
public string SaslUserNameInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientCertificateArnInput`<sup>Optional</sup> <a name="SslClientCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```csharp
public string SslClientCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyArnInput`<sup>Optional</sup> <a name="SslClientKeyArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```csharp
public string SslClientKeyArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyPasswordInput`<sup>Optional</sup> <a name="SslClientKeyPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```csharp
public string SslClientKeyPasswordInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```csharp
public string Broker { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```csharp
public string SaslPassword { get; }
```

- *Type:* string

---

##### `SaslUserName`<sup>Required</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```csharp
public string SaslUserName { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; }
```

- *Type:* string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointKafkaSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix">ResetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix"></a>

```csharp
private void ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```csharp
private void ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public bool|IResolvable IncludeControlDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public bool|IResolvable IncludeNullAndEmptyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public bool|IResolvable IncludePartitionValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public bool|IResolvable IncludeTransactionDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput"></a>

```csharp
public bool|IResolvable NoHexPrefixInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointKinesisSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize">ResetBcpPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup">ResetControlTablesFileGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup">ResetForceLobLookup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode">ResetQuerySingleAlwaysOnNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly">ResetReadBackupOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy">ResetSafeguardPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode">ResetTlogAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar">ResetTrimSpaceInChar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad">ResetUseBcpFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice">ResetUseThirdPartyBackupDevice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBcpPacketSize` <a name="ResetBcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize"></a>

```csharp
private void ResetBcpPacketSize()
```

##### `ResetControlTablesFileGroup` <a name="ResetControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup"></a>

```csharp
private void ResetControlTablesFileGroup()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetForceLobLookup` <a name="ResetForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup"></a>

```csharp
private void ResetForceLobLookup()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetQuerySingleAlwaysOnNode` <a name="ResetQuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode"></a>

```csharp
private void ResetQuerySingleAlwaysOnNode()
```

##### `ResetReadBackupOnly` <a name="ResetReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly"></a>

```csharp
private void ResetReadBackupOnly()
```

##### `ResetSafeguardPolicy` <a name="ResetSafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy"></a>

```csharp
private void ResetSafeguardPolicy()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetTlogAccessMode` <a name="ResetTlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode"></a>

```csharp
private void ResetTlogAccessMode()
```

##### `ResetTrimSpaceInChar` <a name="ResetTrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar"></a>

```csharp
private void ResetTrimSpaceInChar()
```

##### `ResetUseBcpFullLoad` <a name="ResetUseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad"></a>

```csharp
private void ResetUseBcpFullLoad()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUseThirdPartyBackupDevice` <a name="ResetUseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice"></a>

```csharp
private void ResetUseThirdPartyBackupDevice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput">BcpPacketSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput">ControlTablesFileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput">ForceLobLookupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput">QuerySingleAlwaysOnNodeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput">ReadBackupOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput">SafeguardPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput">TlogAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput">TrimSpaceInCharInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput">UseBcpFullLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput">UseThirdPartyBackupDeviceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">BcpPacketSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">ForceLobLookup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">ReadBackupOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">TlogAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BcpPacketSizeInput`<sup>Optional</sup> <a name="BcpPacketSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput"></a>

```csharp
public double BcpPacketSizeInput { get; }
```

- *Type:* double

---

##### `ControlTablesFileGroupInput`<sup>Optional</sup> <a name="ControlTablesFileGroupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput"></a>

```csharp
public string ControlTablesFileGroupInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ForceLobLookupInput`<sup>Optional</sup> <a name="ForceLobLookupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput"></a>

```csharp
public bool|IResolvable ForceLobLookupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `QuerySingleAlwaysOnNodeInput`<sup>Optional</sup> <a name="QuerySingleAlwaysOnNodeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput"></a>

```csharp
public bool|IResolvable QuerySingleAlwaysOnNodeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadBackupOnlyInput`<sup>Optional</sup> <a name="ReadBackupOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput"></a>

```csharp
public bool|IResolvable ReadBackupOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SafeguardPolicyInput`<sup>Optional</sup> <a name="SafeguardPolicyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput"></a>

```csharp
public string SafeguardPolicyInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `TlogAccessModeInput`<sup>Optional</sup> <a name="TlogAccessModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput"></a>

```csharp
public string TlogAccessModeInput { get; }
```

- *Type:* string

---

##### `TrimSpaceInCharInput`<sup>Optional</sup> <a name="TrimSpaceInCharInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput"></a>

```csharp
public bool|IResolvable TrimSpaceInCharInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBcpFullLoadInput`<sup>Optional</sup> <a name="UseBcpFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput"></a>

```csharp
public bool|IResolvable UseBcpFullLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UseThirdPartyBackupDeviceInput`<sup>Optional</sup> <a name="UseThirdPartyBackupDeviceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput"></a>

```csharp
public bool|IResolvable UseThirdPartyBackupDeviceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BcpPacketSize`<sup>Required</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```csharp
public double BcpPacketSize { get; }
```

- *Type:* double

---

##### `ControlTablesFileGroup`<sup>Required</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```csharp
public string ControlTablesFileGroup { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ForceLobLookup`<sup>Required</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```csharp
public bool|IResolvable ForceLobLookup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `QuerySingleAlwaysOnNode`<sup>Required</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```csharp
public bool|IResolvable QuerySingleAlwaysOnNode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadBackupOnly`<sup>Required</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```csharp
public bool|IResolvable ReadBackupOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SafeguardPolicy`<sup>Required</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```csharp
public string SafeguardPolicy { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `TlogAccessMode`<sup>Required</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```csharp
public string TlogAccessMode { get; }
```

- *Type:* string

---

##### `TrimSpaceInChar`<sup>Required</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```csharp
public bool|IResolvable TrimSpaceInChar { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBcpFullLoad`<sup>Required</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```csharp
public bool|IResolvable UseBcpFullLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UseThirdPartyBackupDevice`<sup>Required</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```csharp
public bool|IResolvable UseThirdPartyBackupDevice { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointMicrosoftSqlServerSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---


### DmsEndpointMongoDbSettingsOutputReference <a name="DmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMongoDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate">ResetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId">ResetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel">ResetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```csharp
private void ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource"></a>

```csharp
private void ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate"></a>

```csharp
private void ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId"></a>

```csharp
private void ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel"></a>

```csharp
private void ResetNestingLevel()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```csharp
public string AuthMechanismInput { get; }
```

- *Type:* string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput"></a>

```csharp
public string AuthSourceInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```csharp
public string DocsToInvestigateInput { get; }
```

- *Type:* string

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput"></a>

```csharp
public string ExtractDocIdInput { get; }
```

- *Type:* string

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput"></a>

```csharp
public string NestingLevelInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; }
```

- *Type:* string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; }
```

- *Type:* string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointMongoDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---


### DmsEndpointMySqlSettingsOutputReference <a name="DmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointMySqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">ResetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval">ResetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads">ResetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone">ResetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType">ResetTargetDbType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetCleanSourceMetadataOnMismatch` <a name="ResetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```csharp
private void ResetCleanSourceMetadataOnMismatch()
```

##### `ResetEventsPollInterval` <a name="ResetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```csharp
private void ResetEventsPollInterval()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParallelLoadThreads` <a name="ResetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```csharp
private void ResetParallelLoadThreads()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetServerTimezone` <a name="ResetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone"></a>

```csharp
private void ResetServerTimezone()
```

##### `ResetTargetDbType` <a name="ResetTargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType"></a>

```csharp
private void ResetTargetDbType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">CleanSourceMetadataOnMismatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput">EventsPollIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput">ParallelLoadThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput">ServerTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput">TargetDbTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType">TargetDbType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventsPollIntervalInput`<sup>Optional</sup> <a name="EventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```csharp
public double EventsPollIntervalInput { get; }
```

- *Type:* double

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParallelLoadThreadsInput`<sup>Optional</sup> <a name="ParallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```csharp
public double ParallelLoadThreadsInput { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerTimezoneInput`<sup>Optional</sup> <a name="ServerTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```csharp
public string ServerTimezoneInput { get; }
```

- *Type:* string

---

##### `TargetDbTypeInput`<sup>Optional</sup> <a name="TargetDbTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput"></a>

```csharp
public string TargetDbTypeInput { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; }
```

- *Type:* string

---

##### `TargetDbType`<sup>Required</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```csharp
public string TargetDbType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointMySqlSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---


### DmsEndpointNeptuneSettingsOutputReference <a name="DmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointNeptuneSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration">ResetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled">ResetIamAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount">ResetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder">ResetS3BucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration"></a>

```csharp
private void ResetErrorRetryDuration()
```

##### `ResetIamAuthEnabled` <a name="ResetIamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled"></a>

```csharp
private void ResetIamAuthEnabled()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetMaxRetryCount` <a name="ResetMaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount"></a>

```csharp
private void ResetMaxRetryCount()
```

##### `ResetS3BucketFolder` <a name="ResetS3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder"></a>

```csharp
private void ResetS3BucketFolder()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput">IamAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput">MaxRetryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput">S3BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">MaxRetryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">S3BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput"></a>

```csharp
public double ErrorRetryDurationInput { get; }
```

- *Type:* double

---

##### `IamAuthEnabledInput`<sup>Optional</sup> <a name="IamAuthEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput"></a>

```csharp
public bool|IResolvable IamAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `MaxRetryCountInput`<sup>Optional</sup> <a name="MaxRetryCountInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput"></a>

```csharp
public double MaxRetryCountInput { get; }
```

- *Type:* double

---

##### `S3BucketFolderInput`<sup>Optional</sup> <a name="S3BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput"></a>

```csharp
public string S3BucketFolderInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `IamAuthEnabled`<sup>Required</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```csharp
public bool|IResolvable IamAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MaxRetryCount`<sup>Required</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```csharp
public double MaxRetryCount { get; }
```

- *Type:* double

---

##### `S3BucketFolder`<sup>Required</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```csharp
public string S3BucketFolder { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointNeptuneSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointOracleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly">ResetAccessAlternateDirectly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId">ResetAdditionalArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging">ResetAddSupplementalLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables">ResetAllowSelectNestedTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId">ResetArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly">ResetArchivedLogsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword">ResetAsmPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer">ResetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser">ResetAsmUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics">ResetCharLengthSemantics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog">ResetDirectPathNoLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad">ResetDirectPathParallelLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace">ResetEnableHomogenousTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds">ResetExtraArchivedLogDestIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation">ResetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale">ResetNumberDatatypeScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix">ResetOraclePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads">ResetParallelAsmReadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks">ResetReadAheadBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName">ResetReadTableSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix">ResetReplacePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval">ResetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">ResetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">ResetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption">ResetSecurityDbEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName">ResetSecurityDbEncryptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName">ResetSpatialDataOptionToGeoJsonFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime">ResetStandbyDelayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline">ResetUseAlternateFolderForOnline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile">ResetUseBFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad">ResetUseDirectPathFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader">ResetUseLogminerReader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix">ResetUsePathPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessAlternateDirectly` <a name="ResetAccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```csharp
private void ResetAccessAlternateDirectly()
```

##### `ResetAdditionalArchivedLogDestId` <a name="ResetAdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```csharp
private void ResetAdditionalArchivedLogDestId()
```

##### `ResetAddSupplementalLogging` <a name="ResetAddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```csharp
private void ResetAddSupplementalLogging()
```

##### `ResetAllowSelectNestedTables` <a name="ResetAllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables"></a>

```csharp
private void ResetAllowSelectNestedTables()
```

##### `ResetArchivedLogDestId` <a name="ResetArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```csharp
private void ResetArchivedLogDestId()
```

##### `ResetArchivedLogsOnly` <a name="ResetArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```csharp
private void ResetArchivedLogsOnly()
```

##### `ResetAsmPassword` <a name="ResetAsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```csharp
private void ResetAsmPassword()
```

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```csharp
private void ResetAsmServer()
```

##### `ResetAsmUser` <a name="ResetAsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```csharp
private void ResetAsmUser()
```

##### `ResetCharLengthSemantics` <a name="ResetCharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```csharp
private void ResetCharLengthSemantics()
```

##### `ResetDirectPathNoLog` <a name="ResetDirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```csharp
private void ResetDirectPathNoLog()
```

##### `ResetDirectPathParallelLoad` <a name="ResetDirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```csharp
private void ResetDirectPathParallelLoad()
```

##### `ResetEnableHomogenousTablespace` <a name="ResetEnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```csharp
private void ResetEnableHomogenousTablespace()
```

##### `ResetExtraArchivedLogDestIds` <a name="ResetExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```csharp
private void ResetExtraArchivedLogDestIds()
```

##### `ResetFailTasksOnLobTruncation` <a name="ResetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```csharp
private void ResetFailTasksOnLobTruncation()
```

##### `ResetNumberDatatypeScale` <a name="ResetNumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```csharp
private void ResetNumberDatatypeScale()
```

##### `ResetOraclePathPrefix` <a name="ResetOraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```csharp
private void ResetOraclePathPrefix()
```

##### `ResetParallelAsmReadThreads` <a name="ResetParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```csharp
private void ResetParallelAsmReadThreads()
```

##### `ResetReadAheadBlocks` <a name="ResetReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```csharp
private void ResetReadAheadBlocks()
```

##### `ResetReadTableSpaceName` <a name="ResetReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```csharp
private void ResetReadTableSpaceName()
```

##### `ResetReplacePathPrefix` <a name="ResetReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```csharp
private void ResetReplacePathPrefix()
```

##### `ResetRetryInterval` <a name="ResetRetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```csharp
private void ResetRetryInterval()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```csharp
private void ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetSecurityDbEncryption` <a name="ResetSecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```csharp
private void ResetSecurityDbEncryption()
```

##### `ResetSecurityDbEncryptionName` <a name="ResetSecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```csharp
private void ResetSecurityDbEncryptionName()
```

##### `ResetSpatialDataOptionToGeoJsonFunctionName` <a name="ResetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```csharp
private void ResetSpatialDataOptionToGeoJsonFunctionName()
```

##### `ResetStandbyDelayTime` <a name="ResetStandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```csharp
private void ResetStandbyDelayTime()
```

##### `ResetUseAlternateFolderForOnline` <a name="ResetUseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```csharp
private void ResetUseAlternateFolderForOnline()
```

##### `ResetUseBFile` <a name="ResetUseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile"></a>

```csharp
private void ResetUseBFile()
```

##### `ResetUseDirectPathFullLoad` <a name="ResetUseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```csharp
private void ResetUseDirectPathFullLoad()
```

##### `ResetUseLogminerReader` <a name="ResetUseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```csharp
private void ResetUseLogminerReader()
```

##### `ResetUsePathPrefix` <a name="ResetUsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```csharp
private void ResetUsePathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">AccessAlternateDirectlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">AdditionalArchivedLogDestIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">AddSupplementalLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput">AllowSelectNestedTablesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">ArchivedLogDestIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">ArchivedLogsOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">AsmPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">AsmUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">CharLengthSemanticsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">DirectPathNoLogInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">DirectPathParallelLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">EnableHomogenousTablespaceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">ExtraArchivedLogDestIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput">FailTasksOnLobTruncationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">NumberDatatypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">OraclePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">ParallelAsmReadThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">ReadAheadBlocksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">ReadTableSpaceNameInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">ReplacePathPrefixInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">RetryIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">SecurityDbEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">SecurityDbEncryptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">SpatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">StandbyDelayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">UseAlternateFolderForOnlineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput">UseBFileInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">UseDirectPathFullLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">UseLogminerReaderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">UsePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">AsmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">AsmUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">DirectPathNoLog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">RetryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile">UseBFile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">UseLogminerReader</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">UsePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAlternateDirectlyInput`<sup>Optional</sup> <a name="AccessAlternateDirectlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```csharp
public bool|IResolvable AccessAlternateDirectlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="AdditionalArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```csharp
public double AdditionalArchivedLogDestIdInput { get; }
```

- *Type:* double

---

##### `AddSupplementalLoggingInput`<sup>Optional</sup> <a name="AddSupplementalLoggingInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```csharp
public bool|IResolvable AddSupplementalLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowSelectNestedTablesInput`<sup>Optional</sup> <a name="AllowSelectNestedTablesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput"></a>

```csharp
public bool|IResolvable AllowSelectNestedTablesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ArchivedLogDestIdInput`<sup>Optional</sup> <a name="ArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```csharp
public double ArchivedLogDestIdInput { get; }
```

- *Type:* double

---

##### `ArchivedLogsOnlyInput`<sup>Optional</sup> <a name="ArchivedLogsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```csharp
public bool|IResolvable ArchivedLogsOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AsmPasswordInput`<sup>Optional</sup> <a name="AsmPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```csharp
public string AsmPasswordInput { get; }
```

- *Type:* string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```csharp
public string AsmServerInput { get; }
```

- *Type:* string

---

##### `AsmUserInput`<sup>Optional</sup> <a name="AsmUserInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```csharp
public string AsmUserInput { get; }
```

- *Type:* string

---

##### `CharLengthSemanticsInput`<sup>Optional</sup> <a name="CharLengthSemanticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```csharp
public string CharLengthSemanticsInput { get; }
```

- *Type:* string

---

##### `DirectPathNoLogInput`<sup>Optional</sup> <a name="DirectPathNoLogInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```csharp
public bool|IResolvable DirectPathNoLogInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathParallelLoadInput`<sup>Optional</sup> <a name="DirectPathParallelLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```csharp
public bool|IResolvable DirectPathParallelLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHomogenousTablespaceInput`<sup>Optional</sup> <a name="EnableHomogenousTablespaceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespaceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="ExtraArchivedLogDestIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```csharp
public double[] ExtraArchivedLogDestIdsInput { get; }
```

- *Type:* double[]

---

##### `FailTasksOnLobTruncationInput`<sup>Optional</sup> <a name="FailTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberDatatypeScaleInput`<sup>Optional</sup> <a name="NumberDatatypeScaleInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```csharp
public double NumberDatatypeScaleInput { get; }
```

- *Type:* double

---

##### `OraclePathPrefixInput`<sup>Optional</sup> <a name="OraclePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```csharp
public string OraclePathPrefixInput { get; }
```

- *Type:* string

---

##### `ParallelAsmReadThreadsInput`<sup>Optional</sup> <a name="ParallelAsmReadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```csharp
public double ParallelAsmReadThreadsInput { get; }
```

- *Type:* double

---

##### `ReadAheadBlocksInput`<sup>Optional</sup> <a name="ReadAheadBlocksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```csharp
public double ReadAheadBlocksInput { get; }
```

- *Type:* double

---

##### `ReadTableSpaceNameInput`<sup>Optional</sup> <a name="ReadTableSpaceNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```csharp
public bool|IResolvable ReadTableSpaceNameInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplacePathPrefixInput`<sup>Optional</sup> <a name="ReplacePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```csharp
public bool|IResolvable ReplacePathPrefixInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetryIntervalInput`<sup>Optional</sup> <a name="RetryIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```csharp
public double RetryIntervalInput { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```csharp
public string SecretsManagerOracleAsmSecretIdInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionInput`<sup>Optional</sup> <a name="SecurityDbEncryptionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```csharp
public string SecurityDbEncryptionInput { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionNameInput`<sup>Optional</sup> <a name="SecurityDbEncryptionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```csharp
public string SecurityDbEncryptionNameInput { get; }
```

- *Type:* string

---

##### `SpatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionNameInput { get; }
```

- *Type:* string

---

##### `StandbyDelayTimeInput`<sup>Optional</sup> <a name="StandbyDelayTimeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```csharp
public double StandbyDelayTimeInput { get; }
```

- *Type:* double

---

##### `UseAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="UseAlternateFolderForOnlineInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnlineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBFileInput`<sup>Optional</sup> <a name="UseBFileInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput"></a>

```csharp
public bool|IResolvable UseBFileInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseDirectPathFullLoadInput`<sup>Optional</sup> <a name="UseDirectPathFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLogminerReaderInput`<sup>Optional</sup> <a name="UseLogminerReaderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```csharp
public bool|IResolvable UseLogminerReaderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsePathPrefixInput`<sup>Optional</sup> <a name="UsePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```csharp
public string UsePathPrefixInput { get; }
```

- *Type:* string

---

##### `AccessAlternateDirectly`<sup>Required</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```csharp
public bool|IResolvable AccessAlternateDirectly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalArchivedLogDestId`<sup>Required</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```csharp
public double AdditionalArchivedLogDestId { get; }
```

- *Type:* double

---

##### `AddSupplementalLogging`<sup>Required</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```csharp
public bool|IResolvable AddSupplementalLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowSelectNestedTables`<sup>Required</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```csharp
public bool|IResolvable AllowSelectNestedTables { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ArchivedLogDestId`<sup>Required</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```csharp
public double ArchivedLogDestId { get; }
```

- *Type:* double

---

##### `ArchivedLogsOnly`<sup>Required</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```csharp
public bool|IResolvable ArchivedLogsOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AsmPassword`<sup>Required</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```csharp
public string AsmPassword { get; }
```

- *Type:* string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```csharp
public string AsmServer { get; }
```

- *Type:* string

---

##### `AsmUser`<sup>Required</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```csharp
public string AsmUser { get; }
```

- *Type:* string

---

##### `CharLengthSemantics`<sup>Required</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```csharp
public string CharLengthSemantics { get; }
```

- *Type:* string

---

##### `DirectPathNoLog`<sup>Required</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```csharp
public bool|IResolvable DirectPathNoLog { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathParallelLoad`<sup>Required</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```csharp
public bool|IResolvable DirectPathParallelLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHomogenousTablespace`<sup>Required</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespace { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtraArchivedLogDestIds`<sup>Required</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```csharp
public double[] ExtraArchivedLogDestIds { get; }
```

- *Type:* double[]

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberDatatypeScale`<sup>Required</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```csharp
public double NumberDatatypeScale { get; }
```

- *Type:* double

---

##### `OraclePathPrefix`<sup>Required</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```csharp
public string OraclePathPrefix { get; }
```

- *Type:* string

---

##### `ParallelAsmReadThreads`<sup>Required</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```csharp
public double ParallelAsmReadThreads { get; }
```

- *Type:* double

---

##### `ReadAheadBlocks`<sup>Required</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```csharp
public double ReadAheadBlocks { get; }
```

- *Type:* double

---

##### `ReadTableSpaceName`<sup>Required</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```csharp
public bool|IResolvable ReadTableSpaceName { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplacePathPrefix`<sup>Required</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```csharp
public bool|IResolvable ReplacePathPrefix { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetryInterval`<sup>Required</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```csharp
public double RetryInterval { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SecurityDbEncryption`<sup>Required</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```csharp
public string SecurityDbEncryption { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionName`<sup>Required</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```csharp
public string SecurityDbEncryptionName { get; }
```

- *Type:* string

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionName { get; }
```

- *Type:* string

---

##### `StandbyDelayTime`<sup>Required</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```csharp
public double StandbyDelayTime { get; }
```

- *Type:* double

---

##### `UseAlternateFolderForOnline`<sup>Required</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBFile`<sup>Required</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```csharp
public bool|IResolvable UseBFile { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseDirectPathFullLoad`<sup>Required</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLogminerReader`<sup>Required</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```csharp
public bool|IResolvable UseLogminerReader { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsePathPrefix`<sup>Required</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```csharp
public string UsePathPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointOracleSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---


### DmsEndpointPostgreSqlSettingsOutputReference <a name="DmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointPostgreSqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName">ResetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls">ResetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode">ResetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema">ResetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout">ResetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation">ResetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable">ResetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency">ResetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema">ResetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean">ResetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName">ResetSlotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetBabelfishDatabaseName` <a name="ResetBabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName"></a>

```csharp
private void ResetBabelfishDatabaseName()
```

##### `ResetCaptureDdls` <a name="ResetCaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls"></a>

```csharp
private void ResetCaptureDdls()
```

##### `ResetDatabaseMode` <a name="ResetDatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode"></a>

```csharp
private void ResetDatabaseMode()
```

##### `ResetDdlArtifactsSchema` <a name="ResetDdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema"></a>

```csharp
private void ResetDdlArtifactsSchema()
```

##### `ResetExecuteTimeout` <a name="ResetExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout"></a>

```csharp
private void ResetExecuteTimeout()
```

##### `ResetFailTasksOnLobTruncation` <a name="ResetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```csharp
private void ResetFailTasksOnLobTruncation()
```

##### `ResetHeartbeatEnable` <a name="ResetHeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable"></a>

```csharp
private void ResetHeartbeatEnable()
```

##### `ResetHeartbeatFrequency` <a name="ResetHeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency"></a>

```csharp
private void ResetHeartbeatFrequency()
```

##### `ResetHeartbeatSchema` <a name="ResetHeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema"></a>

```csharp
private void ResetHeartbeatSchema()
```

##### `ResetMapBooleanAsBoolean` <a name="ResetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```csharp
private void ResetMapBooleanAsBoolean()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetSlotName` <a name="ResetSlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName"></a>

```csharp
private void ResetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput">BabelfishDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput">CaptureDdlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput">DatabaseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput">DdlArtifactsSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput">ExecuteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput">FailTasksOnLobTruncationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput">HeartbeatEnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput">HeartbeatFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput">HeartbeatSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput">MapBooleanAsBooleanInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput">SlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseNameInput`<sup>Optional</sup> <a name="BabelfishDatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```csharp
public string BabelfishDatabaseNameInput { get; }
```

- *Type:* string

---

##### `CaptureDdlsInput`<sup>Optional</sup> <a name="CaptureDdlsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput"></a>

```csharp
public bool|IResolvable CaptureDdlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseModeInput`<sup>Optional</sup> <a name="DatabaseModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput"></a>

```csharp
public string DatabaseModeInput { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchemaInput`<sup>Optional</sup> <a name="DdlArtifactsSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```csharp
public string DdlArtifactsSchemaInput { get; }
```

- *Type:* string

---

##### `ExecuteTimeoutInput`<sup>Optional</sup> <a name="ExecuteTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput"></a>

```csharp
public double ExecuteTimeoutInput { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncationInput`<sup>Optional</sup> <a name="FailTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatEnableInput`<sup>Optional</sup> <a name="HeartbeatEnableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput"></a>

```csharp
public bool|IResolvable HeartbeatEnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatFrequencyInput`<sup>Optional</sup> <a name="HeartbeatFrequencyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```csharp
public double HeartbeatFrequencyInput { get; }
```

- *Type:* double

---

##### `HeartbeatSchemaInput`<sup>Optional</sup> <a name="HeartbeatSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput"></a>

```csharp
public string HeartbeatSchemaInput { get; }
```

- *Type:* string

---

##### `MapBooleanAsBooleanInput`<sup>Optional</sup> <a name="MapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```csharp
public bool|IResolvable MapBooleanAsBooleanInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput"></a>

```csharp
public string SlotNameInput { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; }
```

- *Type:* string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```csharp
public bool|IResolvable CaptureDdls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; }
```

- *Type:* string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```csharp
public bool|IResolvable HeartbeatEnable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; }
```

- *Type:* double

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; }
```

- *Type:* string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointPostgreSqlSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">ResetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">ResetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">ResetSslSecurityProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```csharp
private void ResetAuthPassword()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetAuthUserName` <a name="ResetAuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```csharp
private void ResetAuthUserName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslSecurityProtocol` <a name="ResetSslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```csharp
private void ResetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">AuthUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">SslSecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```csharp
public string AuthPasswordInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthUserNameInput`<sup>Optional</sup> <a name="AuthUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```csharp
public string AuthUserNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslSecurityProtocolInput`<sup>Optional</sup> <a name="SslSecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```csharp
public string SslSecurityProtocolInput { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointRedisSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate">ResetAcceptAnyDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate">ResetCompUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull">ResetEmptyAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds">ResetExplicitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams">ResetFileTransferUploadStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout">ResetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean">ResetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes">ResetRemoveQuotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars">ResetReplaceChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars">ResetReplaceInvalidChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks">ResetTrimBlanks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns">ResetTruncateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize">ResetWriteBufferSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptAnyDate` <a name="ResetAcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate"></a>

```csharp
private void ResetAcceptAnyDate()
```

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames"></a>

```csharp
private void ResetCaseSensitiveNames()
```

##### `ResetCompUpdate` <a name="ResetCompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate"></a>

```csharp
private void ResetCompUpdate()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat"></a>

```csharp
private void ResetDateFormat()
```

##### `ResetEmptyAsNull` <a name="ResetEmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull"></a>

```csharp
private void ResetEmptyAsNull()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetExplicitIds` <a name="ResetExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds"></a>

```csharp
private void ResetExplicitIds()
```

##### `ResetFileTransferUploadStreams` <a name="ResetFileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams"></a>

```csharp
private void ResetFileTransferUploadStreams()
```

##### `ResetLoadTimeout` <a name="ResetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout"></a>

```csharp
private void ResetLoadTimeout()
```

##### `ResetMapBooleanAsBoolean` <a name="ResetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```csharp
private void ResetMapBooleanAsBoolean()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetRemoveQuotes` <a name="ResetRemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes"></a>

```csharp
private void ResetRemoveQuotes()
```

##### `ResetReplaceChars` <a name="ResetReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars"></a>

```csharp
private void ResetReplaceChars()
```

##### `ResetReplaceInvalidChars` <a name="ResetReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars"></a>

```csharp
private void ResetReplaceInvalidChars()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat"></a>

```csharp
private void ResetTimeFormat()
```

##### `ResetTrimBlanks` <a name="ResetTrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks"></a>

```csharp
private void ResetTrimBlanks()
```

##### `ResetTruncateColumns` <a name="ResetTruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns"></a>

```csharp
private void ResetTruncateColumns()
```

##### `ResetWriteBufferSize` <a name="ResetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize"></a>

```csharp
private void ResetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput">AcceptAnyDateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput">CompUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput">EmptyAsNullInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput">ExplicitIdsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput">FileTransferUploadStreamsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput">LoadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput">MapBooleanAsBooleanInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput">RemoveQuotesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput">ReplaceCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput">ReplaceInvalidCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput">TrimBlanksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput">TruncateColumnsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput">WriteBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate">CompUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">EmptyAsNull</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds">ExplicitIds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">RemoveQuotes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars">ReplaceChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">TrimBlanks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">TruncateColumns</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptAnyDateInput`<sup>Optional</sup> <a name="AcceptAnyDateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput"></a>

```csharp
public bool|IResolvable AcceptAnyDateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput"></a>

```csharp
public bool|IResolvable CaseSensitiveNamesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CompUpdateInput`<sup>Optional</sup> <a name="CompUpdateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput"></a>

```csharp
public bool|IResolvable CompUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput"></a>

```csharp
public string DateFormatInput { get; }
```

- *Type:* string

---

##### `EmptyAsNullInput`<sup>Optional</sup> <a name="EmptyAsNullInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput"></a>

```csharp
public bool|IResolvable EmptyAsNullInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `ExplicitIdsInput`<sup>Optional</sup> <a name="ExplicitIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput"></a>

```csharp
public bool|IResolvable ExplicitIdsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FileTransferUploadStreamsInput`<sup>Optional</sup> <a name="FileTransferUploadStreamsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput"></a>

```csharp
public double FileTransferUploadStreamsInput { get; }
```

- *Type:* double

---

##### `LoadTimeoutInput`<sup>Optional</sup> <a name="LoadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput"></a>

```csharp
public double LoadTimeoutInput { get; }
```

- *Type:* double

---

##### `MapBooleanAsBooleanInput`<sup>Optional</sup> <a name="MapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```csharp
public bool|IResolvable MapBooleanAsBooleanInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `RemoveQuotesInput`<sup>Optional</sup> <a name="RemoveQuotesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput"></a>

```csharp
public bool|IResolvable RemoveQuotesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplaceCharsInput`<sup>Optional</sup> <a name="ReplaceCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput"></a>

```csharp
public string ReplaceCharsInput { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharsInput`<sup>Optional</sup> <a name="ReplaceInvalidCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput"></a>

```csharp
public string ReplaceInvalidCharsInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput"></a>

```csharp
public string TimeFormatInput { get; }
```

- *Type:* string

---

##### `TrimBlanksInput`<sup>Optional</sup> <a name="TrimBlanksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput"></a>

```csharp
public bool|IResolvable TrimBlanksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TruncateColumnsInput`<sup>Optional</sup> <a name="TruncateColumnsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput"></a>

```csharp
public bool|IResolvable TruncateColumnsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WriteBufferSizeInput`<sup>Optional</sup> <a name="WriteBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput"></a>

```csharp
public double WriteBufferSizeInput { get; }
```

- *Type:* double

---

##### `AcceptAnyDate`<sup>Required</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```csharp
public bool|IResolvable AcceptAnyDate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CompUpdate`<sup>Required</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```csharp
public bool|IResolvable CompUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EmptyAsNull`<sup>Required</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```csharp
public bool|IResolvable EmptyAsNull { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExplicitIds`<sup>Required</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```csharp
public bool|IResolvable ExplicitIds { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FileTransferUploadStreams`<sup>Required</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```csharp
public double FileTransferUploadStreams { get; }
```

- *Type:* double

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; }
```

- *Type:* double

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `RemoveQuotes`<sup>Required</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```csharp
public bool|IResolvable RemoveQuotes { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplaceChars`<sup>Required</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```csharp
public string ReplaceChars { get; }
```

- *Type:* string

---

##### `ReplaceInvalidChars`<sup>Required</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```csharp
public string ReplaceInvalidChars { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TrimBlanks`<sup>Required</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```csharp
public bool|IResolvable TrimBlanks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TruncateColumns`<sup>Required</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```csharp
public bool|IResolvable TruncateColumns { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointRedshiftSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointS3SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">ResetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter">ResetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">ResetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">ResetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">ResetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">ResetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">ResetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">ResetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">ResetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">ResetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">ResetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">ResetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">ResetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">ResetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">ResetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">ResetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone">ResetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">ResetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">ResetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">ResetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration">ResetGlueCatalogGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">ResetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">ResetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">ResetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">ResetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">ResetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">ResetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">ResetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">ResetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">ResetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">ResetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddColumnName` <a name="ResetAddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```csharp
private void ResetAddColumnName()
```

##### `ResetAddTrailingPaddingCharacter` <a name="ResetAddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter"></a>

```csharp
private void ResetAddTrailingPaddingCharacter()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCannedAclForObjects` <a name="ResetCannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```csharp
private void ResetCannedAclForObjects()
```

##### `ResetCdcInsertsAndUpdates` <a name="ResetCdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```csharp
private void ResetCdcInsertsAndUpdates()
```

##### `ResetCdcInsertsOnly` <a name="ResetCdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```csharp
private void ResetCdcInsertsOnly()
```

##### `ResetCdcMaxBatchInterval` <a name="ResetCdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```csharp
private void ResetCdcMaxBatchInterval()
```

##### `ResetCdcMinFileSize` <a name="ResetCdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```csharp
private void ResetCdcMinFileSize()
```

##### `ResetCdcPath` <a name="ResetCdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```csharp
private void ResetCdcPath()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetCsvDelimiter` <a name="ResetCsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```csharp
private void ResetCsvDelimiter()
```

##### `ResetCsvNoSupValue` <a name="ResetCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```csharp
private void ResetCsvNoSupValue()
```

##### `ResetCsvNullValue` <a name="ResetCsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```csharp
private void ResetCsvNullValue()
```

##### `ResetCsvRowDelimiter` <a name="ResetCsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```csharp
private void ResetCsvRowDelimiter()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetDataPageSize` <a name="ResetDataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```csharp
private void ResetDataPageSize()
```

##### `ResetDatePartitionDelimiter` <a name="ResetDatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```csharp
private void ResetDatePartitionDelimiter()
```

##### `ResetDatePartitionEnabled` <a name="ResetDatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```csharp
private void ResetDatePartitionEnabled()
```

##### `ResetDatePartitionSequence` <a name="ResetDatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```csharp
private void ResetDatePartitionSequence()
```

##### `ResetDatePartitionTimezone` <a name="ResetDatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone"></a>

```csharp
private void ResetDatePartitionTimezone()
```

##### `ResetDictPageSizeLimit` <a name="ResetDictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```csharp
private void ResetDictPageSizeLimit()
```

##### `ResetEnableStatistics` <a name="ResetEnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```csharp
private void ResetEnableStatistics()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```csharp
private void ResetEncodingType()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetExternalTableDefinition` <a name="ResetExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```csharp
private void ResetExternalTableDefinition()
```

##### `ResetGlueCatalogGeneration` <a name="ResetGlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration"></a>

```csharp
private void ResetGlueCatalogGeneration()
```

##### `ResetIgnoreHeaderRows` <a name="ResetIgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```csharp
private void ResetIgnoreHeaderRows()
```

##### `ResetIncludeOpForFullLoad` <a name="ResetIncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```csharp
private void ResetIncludeOpForFullLoad()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParquetTimestampInMillisecond` <a name="ResetParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```csharp
private void ResetParquetTimestampInMillisecond()
```

##### `ResetParquetVersion` <a name="ResetParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```csharp
private void ResetParquetVersion()
```

##### `ResetPreserveTransactions` <a name="ResetPreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```csharp
private void ResetPreserveTransactions()
```

##### `ResetRfc4180` <a name="ResetRfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```csharp
private void ResetRfc4180()
```

##### `ResetRowGroupLength` <a name="ResetRowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```csharp
private void ResetRowGroupLength()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetTimestampColumnName` <a name="ResetTimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```csharp
private void ResetTimestampColumnName()
```

##### `ResetUseCsvNoSupValue` <a name="ResetUseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```csharp
private void ResetUseCsvNoSupValue()
```

##### `ResetUseTaskStartTimeForFullLoadTimestamp` <a name="ResetUseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```csharp
private void ResetUseTaskStartTimeForFullLoadTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">AddColumnNameInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput">AddTrailingPaddingCharacterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">CannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">CdcInsertsAndUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">CdcInsertsOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">CdcMaxBatchIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">CdcMinFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">CdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">CsvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">CsvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">CsvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">CsvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">DataPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">DatePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">DatePartitionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">DatePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput">DatePartitionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">DictPageSizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">EnableStatisticsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">ExternalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput">GlueCatalogGenerationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">IgnoreHeaderRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">IncludeOpForFullLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">ParquetTimestampInMillisecondInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">ParquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">PreserveTransactionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">Rfc4180Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">RowGroupLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">TimestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">UseCsvNoSupValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">UseTaskStartTimeForFullLoadTimestampInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddColumnNameInput`<sup>Optional</sup> <a name="AddColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```csharp
public bool|IResolvable AddColumnNameInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AddTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="AddTrailingPaddingCharacterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput"></a>

```csharp
public bool|IResolvable AddTrailingPaddingCharacterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CannedAclForObjectsInput`<sup>Optional</sup> <a name="CannedAclForObjectsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```csharp
public string CannedAclForObjectsInput { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="CdcInsertsAndUpdatesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```csharp
public bool|IResolvable CdcInsertsAndUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CdcInsertsOnlyInput`<sup>Optional</sup> <a name="CdcInsertsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```csharp
public bool|IResolvable CdcInsertsOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="CdcMaxBatchIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```csharp
public double CdcMaxBatchIntervalInput { get; }
```

- *Type:* double

---

##### `CdcMinFileSizeInput`<sup>Optional</sup> <a name="CdcMinFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```csharp
public double CdcMinFileSizeInput { get; }
```

- *Type:* double

---

##### `CdcPathInput`<sup>Optional</sup> <a name="CdcPathInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```csharp
public string CdcPathInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `CsvDelimiterInput`<sup>Optional</sup> <a name="CsvDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```csharp
public string CsvDelimiterInput { get; }
```

- *Type:* string

---

##### `CsvNoSupValueInput`<sup>Optional</sup> <a name="CsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```csharp
public string CsvNoSupValueInput { get; }
```

- *Type:* string

---

##### `CsvNullValueInput`<sup>Optional</sup> <a name="CsvNullValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```csharp
public string CsvNullValueInput { get; }
```

- *Type:* string

---

##### `CsvRowDelimiterInput`<sup>Optional</sup> <a name="CsvRowDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```csharp
public string CsvRowDelimiterInput { get; }
```

- *Type:* string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `DataPageSizeInput`<sup>Optional</sup> <a name="DataPageSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```csharp
public double DataPageSizeInput { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiterInput`<sup>Optional</sup> <a name="DatePartitionDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```csharp
public string DatePartitionDelimiterInput { get; }
```

- *Type:* string

---

##### `DatePartitionEnabledInput`<sup>Optional</sup> <a name="DatePartitionEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```csharp
public bool|IResolvable DatePartitionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatePartitionSequenceInput`<sup>Optional</sup> <a name="DatePartitionSequenceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```csharp
public string DatePartitionSequenceInput { get; }
```

- *Type:* string

---

##### `DatePartitionTimezoneInput`<sup>Optional</sup> <a name="DatePartitionTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput"></a>

```csharp
public string DatePartitionTimezoneInput { get; }
```

- *Type:* string

---

##### `DictPageSizeLimitInput`<sup>Optional</sup> <a name="DictPageSizeLimitInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```csharp
public double DictPageSizeLimitInput { get; }
```

- *Type:* double

---

##### `EnableStatisticsInput`<sup>Optional</sup> <a name="EnableStatisticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```csharp
public bool|IResolvable EnableStatisticsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```csharp
public string EncodingTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `ExternalTableDefinitionInput`<sup>Optional</sup> <a name="ExternalTableDefinitionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```csharp
public string ExternalTableDefinitionInput { get; }
```

- *Type:* string

---

##### `GlueCatalogGenerationInput`<sup>Optional</sup> <a name="GlueCatalogGenerationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput"></a>

```csharp
public bool|IResolvable GlueCatalogGenerationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoreHeaderRowsInput`<sup>Optional</sup> <a name="IgnoreHeaderRowsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```csharp
public double IgnoreHeaderRowsInput { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoadInput`<sup>Optional</sup> <a name="IncludeOpForFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```csharp
public bool|IResolvable IncludeOpForFullLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="ParquetTimestampInMillisecondInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```csharp
public bool|IResolvable ParquetTimestampInMillisecondInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParquetVersionInput`<sup>Optional</sup> <a name="ParquetVersionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```csharp
public string ParquetVersionInput { get; }
```

- *Type:* string

---

##### `PreserveTransactionsInput`<sup>Optional</sup> <a name="PreserveTransactionsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```csharp
public bool|IResolvable PreserveTransactionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Rfc4180Input`<sup>Optional</sup> <a name="Rfc4180Input" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```csharp
public bool|IResolvable Rfc4180Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RowGroupLengthInput`<sup>Optional</sup> <a name="RowGroupLengthInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```csharp
public double RowGroupLengthInput { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `TimestampColumnNameInput`<sup>Optional</sup> <a name="TimestampColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```csharp
public string TimestampColumnNameInput { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValueInput`<sup>Optional</sup> <a name="UseCsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```csharp
public bool|IResolvable UseCsvNoSupValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestampInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```csharp
public bool|IResolvable UseTaskStartTimeForFullLoadTimestampInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```csharp
public bool|IResolvable AddColumnName { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```csharp
public bool|IResolvable AddTrailingPaddingCharacter { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```csharp
public bool|IResolvable CdcInsertsAndUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```csharp
public bool|IResolvable CdcInsertsOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; }
```

- *Type:* double

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; }
```

- *Type:* double

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```csharp
public string CdcPath { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; }
```

- *Type:* string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; }
```

- *Type:* string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; }
```

- *Type:* string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; }
```

- *Type:* string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```csharp
public bool|IResolvable DatePartitionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; }
```

- *Type:* string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```csharp
public string DatePartitionTimezone { get; }
```

- *Type:* string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; }
```

- *Type:* double

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```csharp
public bool|IResolvable EnableStatistics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; }
```

- *Type:* string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```csharp
public bool|IResolvable GlueCatalogGeneration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```csharp
public bool|IResolvable IncludeOpForFullLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```csharp
public bool|IResolvable ParquetTimestampInMillisecond { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; }
```

- *Type:* string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```csharp
public bool|IResolvable PreserveTransactions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```csharp
public bool|IResolvable Rfc4180 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```csharp
public bool|IResolvable UseCsvNoSupValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public bool|IResolvable UseTaskStartTimeForFullLoadTimestamp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointS3Settings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointSybaseSettingsOutputReference <a name="DmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointSybaseSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointSybaseSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---


### DmsEndpointTagsList <a name="DmsEndpointTagsList" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get"></a>

```csharp
private DmsEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---


### DmsEndpointTagsOutputReference <a name="DmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>

---



