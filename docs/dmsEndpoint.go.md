# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-awscc.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpoint(scope Construct, id *string, config DmsEndpointConfig) DmsEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDocDbSettings` <a name="PutDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings"></a>

```go
func PutDocDbSettings(value DmsEndpointDocDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `PutDynamoDbSettings` <a name="PutDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings"></a>

```go
func PutDynamoDbSettings(value DmsEndpointDynamoDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `PutElasticsearchSettings` <a name="PutElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```go
func PutElasticsearchSettings(value DmsEndpointElasticsearchSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `PutGcpMySqlSettings` <a name="PutGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings"></a>

```go
func PutGcpMySqlSettings(value DmsEndpointGcpMySqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `PutIbmDb2Settings` <a name="PutIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings"></a>

```go
func PutIbmDb2Settings(value DmsEndpointIbmDb2Settings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `PutKafkaSettings` <a name="PutKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```go
func PutKafkaSettings(value DmsEndpointKafkaSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `PutKinesisSettings` <a name="PutKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```go
func PutKinesisSettings(value DmsEndpointKinesisSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `PutMicrosoftSqlServerSettings` <a name="PutMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings"></a>

```go
func PutMicrosoftSqlServerSettings(value DmsEndpointMicrosoftSqlServerSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `PutMongoDbSettings` <a name="PutMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings"></a>

```go
func PutMongoDbSettings(value DmsEndpointMongoDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `PutMySqlSettings` <a name="PutMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings"></a>

```go
func PutMySqlSettings(value DmsEndpointMySqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `PutNeptuneSettings` <a name="PutNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings"></a>

```go
func PutNeptuneSettings(value DmsEndpointNeptuneSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```go
func PutOracleSettings(value DmsEndpointOracleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `PutPostgreSqlSettings` <a name="PutPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings"></a>

```go
func PutPostgreSqlSettings(value DmsEndpointPostgreSqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `PutRedisSettings` <a name="PutRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```go
func PutRedisSettings(value DmsEndpointRedisSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```go
func PutRedshiftSettings(value DmsEndpointRedshiftSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `PutS3Settings` <a name="PutS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```go
func PutS3Settings(value DmsEndpointS3Settings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `PutSybaseSettings` <a name="PutSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings"></a>

```go
func PutSybaseSettings(value DmsEndpointSybaseSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDocDbSettings` <a name="ResetDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings"></a>

```go
func ResetDocDbSettings()
```

##### `ResetDynamoDbSettings` <a name="ResetDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings"></a>

```go
func ResetDynamoDbSettings()
```

##### `ResetElasticsearchSettings` <a name="ResetElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```go
func ResetElasticsearchSettings()
```

##### `ResetEndpointIdentifier` <a name="ResetEndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier"></a>

```go
func ResetEndpointIdentifier()
```

##### `ResetExtraConnectionAttributes` <a name="ResetExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```go
func ResetExtraConnectionAttributes()
```

##### `ResetGcpMySqlSettings` <a name="ResetGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings"></a>

```go
func ResetGcpMySqlSettings()
```

##### `ResetIbmDb2Settings` <a name="ResetIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings"></a>

```go
func ResetIbmDb2Settings()
```

##### `ResetKafkaSettings` <a name="ResetKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```go
func ResetKafkaSettings()
```

##### `ResetKinesisSettings` <a name="ResetKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```go
func ResetKinesisSettings()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMicrosoftSqlServerSettings` <a name="ResetMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings"></a>

```go
func ResetMicrosoftSqlServerSettings()
```

##### `ResetMongoDbSettings` <a name="ResetMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings"></a>

```go
func ResetMongoDbSettings()
```

##### `ResetMySqlSettings` <a name="ResetMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings"></a>

```go
func ResetMySqlSettings()
```

##### `ResetNeptuneSettings` <a name="ResetNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings"></a>

```go
func ResetNeptuneSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```go
func ResetOracleSettings()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPostgreSqlSettings` <a name="ResetPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings"></a>

```go
func ResetPostgreSqlSettings()
```

##### `ResetRedisSettings` <a name="ResetRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```go
func ResetRedisSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```go
func ResetRedshiftSettings()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier"></a>

```go
func ResetResourceIdentifier()
```

##### `ResetS3Settings` <a name="ResetS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```go
func ResetS3Settings()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```go
func ResetSslMode()
```

##### `ResetSybaseSettings` <a name="ResetSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings"></a>

```go
func ResetSybaseSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```go
func ResetUsername()
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

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.DmsEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.DmsEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.DmsEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.DmsEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput">DocDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput">DynamoDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">ElasticsearchSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput">EndpointIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput">EngineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">ExtraConnectionAttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput">GcpMySqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput">IbmDb2SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">KafkaSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">KinesisSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput">MicrosoftSqlServerSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput">MongoDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput">MySqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput">NeptuneSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput">PostgreSqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">RedisSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">S3SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput">SybaseSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName">EngineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings"></a>

```go
func DocDbSettings() DmsEndpointDocDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a>

---

##### `DynamoDbSettings`<sup>Required</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings"></a>

```go
func DynamoDbSettings() DmsEndpointDynamoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```go
func ElasticsearchSettings() DmsEndpointElasticsearchSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `GcpMySqlSettings`<sup>Required</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings"></a>

```go
func GcpMySqlSettings() DmsEndpointGcpMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `IbmDb2Settings`<sup>Required</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings"></a>

```go
func IbmDb2Settings() DmsEndpointIbmDb2SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```go
func KafkaSettings() DmsEndpointKafkaSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```go
func KinesisSettings() DmsEndpointKinesisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings"></a>

```go
func MicrosoftSqlServerSettings() DmsEndpointMicrosoftSqlServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings"></a>

```go
func MongoDbSettings() DmsEndpointMongoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a>

---

##### `MySqlSettings`<sup>Required</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings"></a>

```go
func MySqlSettings() DmsEndpointMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a>

---

##### `NeptuneSettings`<sup>Required</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings"></a>

```go
func NeptuneSettings() DmsEndpointNeptuneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```go
func OracleSettings() DmsEndpointOracleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `PostgreSqlSettings`<sup>Required</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings"></a>

```go
func PostgreSqlSettings() DmsEndpointPostgreSqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```go
func RedisSettings() DmsEndpointRedisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```go
func RedshiftSettings() DmsEndpointRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```go
func S3Settings() DmsEndpointS3SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `SybaseSettings`<sup>Required</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings"></a>

```go
func SybaseSettings() DmsEndpointSybaseSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags"></a>

```go
func Tags() DmsEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DocDbSettingsInput`<sup>Optional</sup> <a name="DocDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput"></a>

```go
func DocDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DynamoDbSettingsInput`<sup>Optional</sup> <a name="DynamoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput"></a>

```go
func DynamoDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchSettingsInput`<sup>Optional</sup> <a name="ElasticsearchSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```go
func ElasticsearchSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointIdentifierInput`<sup>Optional</sup> <a name="EndpointIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput"></a>

```go
func EndpointIdentifierInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```go
func EngineNameInput() *string
```

- *Type:* *string

---

##### `ExtraConnectionAttributesInput`<sup>Optional</sup> <a name="ExtraConnectionAttributesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```go
func ExtraConnectionAttributesInput() *string
```

- *Type:* *string

---

##### `GcpMySqlSettingsInput`<sup>Optional</sup> <a name="GcpMySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput"></a>

```go
func GcpMySqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IbmDb2SettingsInput`<sup>Optional</sup> <a name="IbmDb2SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput"></a>

```go
func IbmDb2SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaSettingsInput`<sup>Optional</sup> <a name="KafkaSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```go
func KafkaSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisSettingsInput`<sup>Optional</sup> <a name="KinesisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```go
func KinesisSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftSqlServerSettingsInput`<sup>Optional</sup> <a name="MicrosoftSqlServerSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput"></a>

```go
func MicrosoftSqlServerSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MongoDbSettingsInput`<sup>Optional</sup> <a name="MongoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput"></a>

```go
func MongoDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MySqlSettingsInput`<sup>Optional</sup> <a name="MySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput"></a>

```go
func MySqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `NeptuneSettingsInput`<sup>Optional</sup> <a name="NeptuneSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput"></a>

```go
func NeptuneSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```go
func OracleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PostgreSqlSettingsInput`<sup>Optional</sup> <a name="PostgreSqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput"></a>

```go
func PostgreSqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `RedisSettingsInput`<sup>Optional</sup> <a name="RedisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```go
func RedisSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```go
func RedshiftSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput"></a>

```go
func ResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `S3SettingsInput`<sup>Optional</sup> <a name="S3SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```go
func S3SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `SybaseSettingsInput`<sup>Optional</sup> <a name="SybaseSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput"></a>

```go
func SybaseSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EndpointIdentifier`<sup>Required</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier"></a>

```go
func EndpointIdentifier() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```go
func EngineName() *string
```

- *Type:* *string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```go
func ExtraConnectionAttributes() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointType: *string,
	EngineName: *string,
	CertificateArn: *string,
	DatabaseName: *string,
	DocDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointDocDbSettings,
	DynamoDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointDynamoDbSettings,
	ElasticsearchSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointElasticsearchSettings,
	EndpointIdentifier: *string,
	ExtraConnectionAttributes: *string,
	GcpMySqlSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings,
	IbmDb2Settings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointIbmDb2Settings,
	KafkaSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointKafkaSettings,
	KinesisSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointKinesisSettings,
	KmsKeyId: *string,
	MicrosoftSqlServerSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings,
	MongoDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointMongoDbSettings,
	MySqlSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointMySqlSettings,
	NeptuneSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointNeptuneSettings,
	OracleSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointOracleSettings,
	Password: *string,
	Port: *f64,
	PostgreSqlSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings,
	RedisSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointRedisSettings,
	RedshiftSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointRedshiftSettings,
	ResourceIdentifier: *string,
	S3Settings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointS3Settings,
	ServerName: *string,
	SslMode: *string,
	SybaseSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsEndpoint.DmsEndpointSybaseSettings,
	Tags: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | The type of endpoint. Valid values are source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName">EngineName</a></code> | <code>*string</code> | The type of engine for the endpoint, depending on the EndpointType value. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>*string</code> | The database endpoint identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>*string</code> | Additional attributes associated with the connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | Settings in JSON format for the source and target MySQL endpoin. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings">NeptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password">Password</a></code> | <code>*string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port">Port</a></code> | <code>*f64</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName">ServerName</a></code> | <code>*string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode">SslMode</a></code> | <code>*string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings">SybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username">Username</a></code> | <code>*string</code> | The user name to be used to log in to the endpoint database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

The type of endpoint. Valid values are source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```go
EngineName *string
```

- *Type:* *string

The type of engine for the endpoint, depending on the EndpointType value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the endpoint database.

For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `DocDbSettings`<sup>Optional</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings"></a>

```go
DocDbSettings DmsEndpointDocDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

Settings in JSON format for the source and target DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#doc_db_settings DmsEndpoint#doc_db_settings}

---

##### `DynamoDbSettings`<sup>Optional</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings"></a>

```go
DynamoDbSettings DmsEndpointDynamoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

Settings in JSON format for the target Amazon DynamoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#dynamo_db_settings DmsEndpoint#dynamo_db_settings}

---

##### `ElasticsearchSettings`<sup>Optional</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```go
ElasticsearchSettings DmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

Settings in JSON format for the target OpenSearch endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `EndpointIdentifier`<sup>Optional</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier"></a>

```go
EndpointIdentifier *string
```

- *Type:* *string

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#endpoint_identifier DmsEndpoint#endpoint_identifier}

---

##### `ExtraConnectionAttributes`<sup>Optional</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```go
ExtraConnectionAttributes *string
```

- *Type:* *string

Additional attributes associated with the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}

---

##### `GcpMySqlSettings`<sup>Optional</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings"></a>

```go
GcpMySqlSettings DmsEndpointGcpMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

Settings in JSON format for the source GCP MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#gcp_my_sql_settings DmsEndpoint#gcp_my_sql_settings}

---

##### `IbmDb2Settings`<sup>Optional</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings"></a>

```go
IbmDb2Settings DmsEndpointIbmDb2Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

Settings in JSON format for the source IBM Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ibm_db_2_settings DmsEndpoint#ibm_db_2_settings}

---

##### `KafkaSettings`<sup>Optional</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```go
KafkaSettings DmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

Settings in JSON format for the target Apache Kafka endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `KinesisSettings`<sup>Optional</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```go
KinesisSettings DmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#kms_key_id DmsEndpoint#kms_key_id}

---

##### `MicrosoftSqlServerSettings`<sup>Optional</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings"></a>

```go
MicrosoftSqlServerSettings DmsEndpointMicrosoftSqlServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#microsoft_sql_server_settings DmsEndpoint#microsoft_sql_server_settings}

---

##### `MongoDbSettings`<sup>Optional</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings"></a>

```go
MongoDbSettings DmsEndpointMongoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

Settings in JSON format for the source MongoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#mongo_db_settings DmsEndpoint#mongo_db_settings}

---

##### `MySqlSettings`<sup>Optional</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings"></a>

```go
MySqlSettings DmsEndpointMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

Settings in JSON format for the source and target MySQL endpoin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#my_sql_settings DmsEndpoint#my_sql_settings}

---

##### `NeptuneSettings`<sup>Optional</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings"></a>

```go
NeptuneSettings DmsEndpointNeptuneSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

Settings in JSON format for the target Amazon Neptune endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#neptune_settings DmsEndpoint#neptune_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```go
OracleSettings DmsEndpointOracleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

Settings in JSON format for the source and target Oracle endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `PostgreSqlSettings`<sup>Optional</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings"></a>

```go
PostgreSqlSettings DmsEndpointPostgreSqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

Settings in JSON format for the source and target PostgreSQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#postgre_sql_settings DmsEndpoint#postgre_sql_settings}

---

##### `RedisSettings`<sup>Optional</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```go
RedisSettings DmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

Settings in JSON format for the target Redis endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```go
RedshiftSettings DmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

Settings in JSON format for the Amazon Redshift endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier"></a>

```go
ResourceIdentifier *string
```

- *Type:* *string

A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#resource_identifier DmsEndpoint#resource_identifier}

---

##### `S3Settings`<sup>Optional</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```go
S3Settings DmsEndpointS3Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

Settings in JSON format for the source and target Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

The name of the server where the endpoint database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}

---

##### `SybaseSettings`<sup>Optional</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings"></a>

```go
SybaseSettings DmsEndpointSybaseSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

Settings in JSON format for the source and target SAP ASE endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#sybase_settings DmsEndpoint#sybase_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags to be assigned to the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointDocDbSettings <a name="DmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointDocDbSettings {
	DocsToInvestigate: *f64,
	ExtractDocId: interface{},
	NestingLevel: *string,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*f64</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId">ExtractDocId</a></code> | <code>interface{}</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate"></a>

```go
DocsToInvestigate *f64
```

- *Type:* *f64

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId"></a>

```go
ExtractDocId interface{}
```

- *Type:* interface{}

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel"></a>

```go
NestingLevel *string
```

- *Type:* *string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointDynamoDbSettings <a name="DmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointDynamoDbSettings {
	ServiceAccessRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointElasticsearchSettings {
	EndpointUri: *string,
	ErrorRetryDuration: *f64,
	FullLoadErrorPercentage: *f64,
	ServiceAccessRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | The endpoint for the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>*f64</code> | The maximum percentage of records that can fail to be written before a full load operation stops. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `EndpointUri`<sup>Optional</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```go
EndpointUri *string
```

- *Type:* *string

The endpoint for the OpenSearch cluster.

AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```go
ErrorRetryDuration *f64
```

- *Type:* *f64

The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `FullLoadErrorPercentage`<sup>Optional</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```go
FullLoadErrorPercentage *f64
```

- *Type:* *f64

The maximum percentage of records that can fail to be written before a full load operation stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointGcpMySqlSettings <a name="DmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointGcpMySqlSettings {
	AfterConnectScript: *string,
	CleanSourceMetadataOnMismatch: interface{},
	DatabaseName: *string,
	EventsPollInterval: *f64,
	MaxFileSize: *f64,
	ParallelLoadThreads: *f64,
	Password: *string,
	Port: *f64,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	ServerName: *string,
	ServerTimezone: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>interface{}</code> | Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password">Password</a></code> | <code>*string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port">Port</a></code> | <code>*f64</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName">ServerName</a></code> | <code>*string</code> | The MySQL host name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username">Username</a></code> | <code>*string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript"></a>

```go
AfterConnectScript *string
```

- *Type:* *string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `CleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```go
CleanSourceMetadataOnMismatch interface{}
```

- *Type:* interface{}

Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster.

If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Database name for the endpoint.

For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `EventsPollInterval`<sup>Optional</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval"></a>

```go
EventsPollInterval *f64
```

- *Type:* *f64

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParallelLoadThreads`<sup>Optional</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads"></a>

```go
ParallelLoadThreads *f64
```

- *Type:* *f64

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password"></a>

```go
Password *string
```

- *Type:* *string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

The MySQL host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `ServerTimezone`<sup>Optional</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone"></a>

```go
ServerTimezone *string
```

- *Type:* *string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointIbmDb2Settings <a name="DmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointIbmDb2Settings {
	CurrentLsn: *string,
	KeepCsvFiles: interface{},
	LoadTimeout: *f64,
	MaxFileSize: *f64,
	MaxKBytesPerRead: *f64,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	SetDataCaptureChanges: interface{},
	WriteBufferSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn">CurrentLsn</a></code> | <code>*string</code> | For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>interface{}</code> | If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>*f64</code> | Maximum number of bytes per read, as a NUMBER value. The default is 64 KB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>interface{}</code> | Enables ongoing replication (CDC) as a BOOLEAN value. The default is true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB). |

---

##### `CurrentLsn`<sup>Optional</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn"></a>

```go
CurrentLsn *string
```

- *Type:* *string

For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#current_lsn DmsEndpoint#current_lsn}

---

##### `KeepCsvFiles`<sup>Optional</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles"></a>

```go
KeepCsvFiles interface{}
```

- *Type:* interface{}

If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#keep_csv_files DmsEndpoint#keep_csv_files}

---

##### `LoadTimeout`<sup>Optional</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout"></a>

```go
LoadTimeout *f64
```

- *Type:* *f64

The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target.

The default value is 1200 (20 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `MaxKBytesPerRead`<sup>Optional</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

```go
MaxKBytesPerRead *f64
```

- *Type:* *f64

Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_k_bytes_per_read DmsEndpoint#max_k_bytes_per_read}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SetDataCaptureChanges`<sup>Optional</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

```go
SetDataCaptureChanges interface{}
```

- *Type:* interface{}

Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#set_data_capture_changes DmsEndpoint#set_data_capture_changes}

---

##### `WriteBufferSize`<sup>Optional</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize"></a>

```go
WriteBufferSize *f64
```

- *Type:* *f64

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointKafkaSettings {
	Broker: *string,
	IncludeControlDetails: interface{},
	IncludeNullAndEmpty: interface{},
	IncludePartitionValue: interface{},
	IncludeTableAlterOperations: interface{},
	IncludeTransactionDetails: interface{},
	MessageFormat: *string,
	MessageMaxBytes: *f64,
	NoHexPrefix: interface{},
	PartitionIncludeSchemaTable: interface{},
	SaslPassword: *string,
	SaslUserName: *string,
	SecurityProtocol: *string,
	SslCaCertificateArn: *string,
	SslClientCertificateArn: *string,
	SslClientKeyArn: *string,
	SslClientKeyPassword: *string,
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">Broker</a></code> | <code>*string</code> | A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>interface{}</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>interface{}</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>interface{}</code> | Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>interface{}</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>interface{}</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | The maximum size in bytes for records created on the endpoint The default is 1,000,000. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>interface{}</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>interface{}</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">SaslPassword</a></code> | <code>*string</code> | The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName">SaslUserName</a></code> | <code>*string</code> | The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>*string</code> | The password for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">Topic</a></code> | <code>*string</code> | The topic to which you migrate the data. |

---

##### `Broker`<sup>Optional</sup> <a name="Broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```go
Broker *string
```

- *Type:* *string

A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance.

Specify each broker location in the form broker-hostname-or-ip:port

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```go
IncludeControlDetails interface{}
```

- *Type:* interface{}

Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```go
IncludeNullAndEmpty interface{}
```

- *Type:* interface{}

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```go
IncludePartitionValue interface{}
```

- *Type:* interface{}

Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```go
IncludeTableAlterOperations interface{}
```

- *Type:* interface{}

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```go
IncludeTransactionDetails interface{}
```

- *Type:* interface{}

Provides detailed transaction information from the source database.

This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```go
MessageFormat *string
```

- *Type:* *string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```go
MessageMaxBytes *f64
```

- *Type:* *f64

The maximum size in bytes for records created on the endpoint The default is 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```go
NoHexPrefix interface{}
```

- *Type:* interface{}

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```go
PartitionIncludeSchemaTable interface{}
```

- *Type:* interface{}

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `SaslPassword`<sup>Optional</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```go
SaslPassword *string
```

- *Type:* *string

The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}

---

##### `SaslUserName`<sup>Optional</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName"></a>

```go
SaslUserName *string
```

- *Type:* *string

The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#sasl_user_name DmsEndpoint#sasl_user_name}

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```go
SecurityProtocol *string
```

- *Type:* *string

Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).

Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```go
SslCaCertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `SslClientCertificateArn`<sup>Optional</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```go
SslClientCertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}

---

##### `SslClientKeyArn`<sup>Optional</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```go
SslClientKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}

---

##### `SslClientKeyPassword`<sup>Optional</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```go
SslClientKeyPassword *string
```

- *Type:* *string

The password for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The topic to which you migrate the data.

If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointKinesisSettings {
	IncludeControlDetails: interface{},
	IncludeNullAndEmpty: interface{},
	IncludePartitionValue: interface{},
	IncludeTableAlterOperations: interface{},
	IncludeTransactionDetails: interface{},
	MessageFormat: *string,
	NoHexPrefix: interface{},
	PartitionIncludeSchemaTable: interface{},
	ServiceAccessRoleArn: *string,
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>interface{}</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>interface{}</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>interface{}</code> | Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>interface{}</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>interface{}</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>interface{}</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>interface{}</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">StreamArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint. |

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```go
IncludeControlDetails interface{}
```

- *Type:* interface{}

Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```go
IncludeNullAndEmpty interface{}
```

- *Type:* interface{}

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```go
IncludePartitionValue interface{}
```

- *Type:* interface{}

Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```go
IncludeTableAlterOperations interface{}
```

- *Type:* interface{}

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```go
IncludeTransactionDetails interface{}
```

- *Type:* interface{}

Provides detailed transaction information from the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```go
MessageFormat *string
```

- *Type:* *string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix"></a>

```go
NoHexPrefix interface{}
```

- *Type:* interface{}

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```go
PartitionIncludeSchemaTable interface{}
```

- *Type:* interface{}

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}

---

### DmsEndpointMicrosoftSqlServerSettings <a name="DmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointMicrosoftSqlServerSettings {
	BcpPacketSize: *f64,
	ControlTablesFileGroup: *string,
	DatabaseName: *string,
	ForceLobLookup: interface{},
	Password: *string,
	Port: *f64,
	QuerySingleAlwaysOnNode: interface{},
	ReadBackupOnly: interface{},
	SafeguardPolicy: *string,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	ServerName: *string,
	TlogAccessMode: *string,
	TrimSpaceInChar: interface{},
	UseBcpFullLoad: interface{},
	Username: *string,
	UseThirdPartyBackupDevice: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize">BcpPacketSize</a></code> | <code>*f64</code> | The maximum size of the packets (in bytes) used to transfer data using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>*string</code> | Specifies a file group for the AWS DMS internal tables. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup">ForceLobLookup</a></code> | <code>interface{}</code> | Forces LOB lookup on inline LOB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password">Password</a></code> | <code>*string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port">Port</a></code> | <code>*f64</code> | Endpoint TCP port. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>interface{}</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly">ReadBackupOnly</a></code> | <code>interface{}</code> | When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>*string</code> | Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode">TlogAccessMode</a></code> | <code>*string</code> | Indicates the mode used to fetch CDC data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>interface{}</code> | Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>interface{}</code> | Use this to attribute to transfer data for full-load operations using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username">Username</a></code> | <code>*string</code> | Endpoint connection user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>interface{}</code> | When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format. |

---

##### `BcpPacketSize`<sup>Optional</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

```go
BcpPacketSize *f64
```

- *Type:* *f64

The maximum size of the packets (in bytes) used to transfer data using BCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#bcp_packet_size DmsEndpoint#bcp_packet_size}

---

##### `ControlTablesFileGroup`<sup>Optional</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

```go
ControlTablesFileGroup *string
```

- *Type:* *string

Specifies a file group for the AWS DMS internal tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#control_tables_file_group DmsEndpoint#control_tables_file_group}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `ForceLobLookup`<sup>Optional</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup"></a>

```go
ForceLobLookup interface{}
```

- *Type:* interface{}

Forces LOB lookup on inline LOB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#force_lob_lookup DmsEndpoint#force_lob_lookup}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password"></a>

```go
Password *string
```

- *Type:* *string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Endpoint TCP port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `QuerySingleAlwaysOnNode`<sup>Optional</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode"></a>

```go
QuerySingleAlwaysOnNode interface{}
```

- *Type:* interface{}

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#query_single_always_on_node DmsEndpoint#query_single_always_on_node}

---

##### `ReadBackupOnly`<sup>Optional</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

```go
ReadBackupOnly interface{}
```

- *Type:* interface{}

When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication.

Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#read_backup_only DmsEndpoint#read_backup_only}

---

##### `SafeguardPolicy`<sup>Optional</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

```go
SafeguardPolicy *string
```

- *Type:* *string

Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#safeguard_policy DmsEndpoint#safeguard_policy}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Fully qualified domain name of the endpoint.

For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `TlogAccessMode`<sup>Optional</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode"></a>

```go
TlogAccessMode *string
```

- *Type:* *string

Indicates the mode used to fetch CDC data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#tlog_access_mode DmsEndpoint#tlog_access_mode}

---

##### `TrimSpaceInChar`<sup>Optional</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar"></a>

```go
TrimSpaceInChar interface{}
```

- *Type:* interface{}

Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration.

Setting TrimSpaceInChar does not left-trim data. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}

---

##### `UseBcpFullLoad`<sup>Optional</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

```go
UseBcpFullLoad interface{}
```

- *Type:* interface{}

Use this to attribute to transfer data for full-load operations using BCP.

When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_bcp_full_load DmsEndpoint#use_bcp_full_load}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username"></a>

```go
Username *string
```

- *Type:* *string

Endpoint connection user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

##### `UseThirdPartyBackupDevice`<sup>Optional</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice"></a>

```go
UseThirdPartyBackupDevice interface{}
```

- *Type:* interface{}

When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_third_party_backup_device DmsEndpoint#use_third_party_backup_device}

---

### DmsEndpointMongoDbSettings <a name="DmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointMongoDbSettings {
	AuthMechanism: *string,
	AuthSource: *string,
	AuthType: *string,
	DatabaseName: *string,
	DocsToInvestigate: *string,
	ExtractDocId: *string,
	NestingLevel: *string,
	Password: *string,
	Port: *f64,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	ServerName: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | The authentication mechanism you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource">AuthSource</a></code> | <code>*string</code> | The MongoDB database name. This setting isn't used when AuthType is set to "no". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType">AuthType</a></code> | <code>*string</code> | The authentication type you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*string</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId">ExtractDocId</a></code> | <code>*string</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password">Password</a></code> | <code>*string</code> | The password for the user account you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port">Port</a></code> | <code>*f64</code> | The port value for the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | The name of the server on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username">Username</a></code> | <code>*string</code> | The user name you use to access the MongoDB source endpoint. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism"></a>

```go
AuthMechanism *string
```

- *Type:* *string

The authentication mechanism you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource"></a>

```go
AuthSource *string
```

- *Type:* *string

The MongoDB database name. This setting isn't used when AuthType is set to "no".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication type you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The database name on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate"></a>

```go
DocsToInvestigate *string
```

- *Type:* *string

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId"></a>

```go
ExtractDocId *string
```

- *Type:* *string

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel"></a>

```go
NestingLevel *string
```

- *Type:* *string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the user account you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port value for the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

The name of the server on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointMySqlSettings <a name="DmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointMySqlSettings {
	AfterConnectScript: *string,
	CleanSourceMetadataOnMismatch: interface{},
	EventsPollInterval: *f64,
	MaxFileSize: *f64,
	ParallelLoadThreads: *f64,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	ServerTimezone: *string,
	TargetDbType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>interface{}</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | Specifies the time zone for the source MySQL database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType">TargetDbType</a></code> | <code>*string</code> | Specifies where to migrate source tables on the target, either to a single database or multiple databases. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript"></a>

```go
AfterConnectScript *string
```

- *Type:* *string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `CleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```go
CleanSourceMetadataOnMismatch interface{}
```

- *Type:* interface{}

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `EventsPollInterval`<sup>Optional</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval"></a>

```go
EventsPollInterval *f64
```

- *Type:* *f64

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParallelLoadThreads`<sup>Optional</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads"></a>

```go
ParallelLoadThreads *f64
```

- *Type:* *f64

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerTimezone`<sup>Optional</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone"></a>

```go
ServerTimezone *string
```

- *Type:* *string

Specifies the time zone for the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `TargetDbType`<sup>Optional</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType"></a>

```go
TargetDbType *string
```

- *Type:* *string

Specifies where to migrate source tables on the target, either to a single database or multiple databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}

---

### DmsEndpointNeptuneSettings <a name="DmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointNeptuneSettings {
	ErrorRetryDuration: *f64,
	IamAuthEnabled: interface{},
	MaxFileSize: *f64,
	MaxRetryCount: *f64,
	S3BucketFolder: *string,
	S3BucketName: *string,
	ServiceAccessRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>interface{}</code> | If you want IAM authorization enabled for this endpoint, set this parameter to true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder">S3BucketFolder</a></code> | <code>*string</code> | A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. |

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration"></a>

```go
ErrorRetryDuration *f64
```

- *Type:* *f64

The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error.

The default is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `IamAuthEnabled`<sup>Optional</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled"></a>

```go
IamAuthEnabled interface{}
```

- *Type:* interface{}

If you want IAM authorization enabled for this endpoint, set this parameter to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#iam_auth_enabled DmsEndpoint#iam_auth_enabled}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount"></a>

```go
MaxRetryCount *f64
```

- *Type:* *f64

The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error.

The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_retry_count DmsEndpoint#max_retry_count}

---

##### `S3BucketFolder`<sup>Optional</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder"></a>

```go
S3BucketFolder *string
```

- *Type:* *string

A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#s3_bucket_folder DmsEndpoint#s3_bucket_folder}

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#s3_bucket_name DmsEndpoint#s3_bucket_name}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointOracleSettings {
	AccessAlternateDirectly: interface{},
	AdditionalArchivedLogDestId: *f64,
	AddSupplementalLogging: interface{},
	AllowSelectNestedTables: interface{},
	ArchivedLogDestId: *f64,
	ArchivedLogsOnly: interface{},
	AsmPassword: *string,
	AsmServer: *string,
	AsmUser: *string,
	CharLengthSemantics: *string,
	DirectPathNoLog: interface{},
	DirectPathParallelLoad: interface{},
	EnableHomogenousTablespace: interface{},
	ExtraArchivedLogDestIds: *[]*f64,
	FailTasksOnLobTruncation: interface{},
	NumberDatatypeScale: *f64,
	OraclePathPrefix: *string,
	ParallelAsmReadThreads: *f64,
	ReadAheadBlocks: *f64,
	ReadTableSpaceName: interface{},
	ReplacePathPrefix: interface{},
	RetryInterval: *f64,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerOracleAsmAccessRoleArn: *string,
	SecretsManagerOracleAsmSecretId: *string,
	SecretsManagerSecretId: *string,
	SecurityDbEncryption: *string,
	SecurityDbEncryptionName: *string,
	SpatialDataOptionToGeoJsonFunctionName: *string,
	StandbyDelayTime: *f64,
	UseAlternateFolderForOnline: interface{},
	UseBFile: interface{},
	UseDirectPathFullLoad: interface{},
	UseLogminerReader: interface{},
	UsePathPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>interface{}</code> | Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>*f64</code> | Set this attribute with ArchivedLogDestId in a primary/ standby setup. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>interface{}</code> | Set this attribute to set up table-level supplemental logging for the Oracle database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>interface{}</code> | Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>*f64</code> | Specifies the ID of the destination for the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>interface{}</code> | When this field is set to True, AWS DMS only accesses the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">AsmPassword</a></code> | <code>*string</code> | For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">AsmServer</a></code> | <code>*string</code> | For an Oracle source endpoint, your ASM server address. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">AsmUser</a></code> | <code>*string</code> | For an Oracle source endpoint, your ASM user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>*string</code> | Specifies whether the length of a character column is in bytes or in characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">DirectPathNoLog</a></code> | <code>interface{}</code> | When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>interface{}</code> | When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>interface{}</code> | Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>*[]*f64</code> | Specifies the IDs of one more destinations for one or more archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>interface{}</code> | When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>*f64</code> | Specifies the number scale. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>*string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>*f64</code> | Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>*f64</code> | Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>interface{}</code> | When set to true, this attribute supports tablespace replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>interface{}</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">RetryInterval</a></code> | <code>*f64</code> | Specifies the number of seconds that the system waits before resending a query. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>*string</code> | For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>*string</code> | For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>*string</code> | Use this attribute to convert SDO_GEOMETRY to GEOJSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>*f64</code> | Use this attribute to specify a time in minutes for the delay in standby sync. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>interface{}</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile">UseBFile</a></code> | <code>interface{}</code> | Set this attribute to True to capture change data using the Binary Reader utility. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>interface{}</code> | Set this attribute to True to have AWS DMS use a direct path full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">UseLogminerReader</a></code> | <code>interface{}</code> | Set this attribute to True to capture change data using the Oracle LogMiner utility (the default). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">UsePathPrefix</a></code> | <code>*string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |

---

##### `AccessAlternateDirectly`<sup>Optional</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```go
AccessAlternateDirectly interface{}
```

- *Type:* interface{}

Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}

---

##### `AdditionalArchivedLogDestId`<sup>Optional</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```go
AdditionalArchivedLogDestId *f64
```

- *Type:* *f64

Set this attribute with ArchivedLogDestId in a primary/ standby setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}

---

##### `AddSupplementalLogging`<sup>Optional</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```go
AddSupplementalLogging interface{}
```

- *Type:* interface{}

Set this attribute to set up table-level supplemental logging for the Oracle database.

This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}

---

##### `AllowSelectNestedTables`<sup>Optional</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables"></a>

```go
AllowSelectNestedTables interface{}
```

- *Type:* interface{}

Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#allow_select_nested_tables DmsEndpoint#allow_select_nested_tables}

---

##### `ArchivedLogDestId`<sup>Optional</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```go
ArchivedLogDestId *f64
```

- *Type:* *f64

Specifies the ID of the destination for the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}

---

##### `ArchivedLogsOnly`<sup>Optional</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```go
ArchivedLogsOnly interface{}
```

- *Type:* interface{}

When this field is set to True, AWS DMS only accesses the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}

---

##### `AsmPassword`<sup>Optional</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```go
AsmPassword *string
```

- *Type:* *string

For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```go
AsmServer *string
```

- *Type:* *string

For an Oracle source endpoint, your ASM server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}

---

##### `AsmUser`<sup>Optional</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```go
AsmUser *string
```

- *Type:* *string

For an Oracle source endpoint, your ASM user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}

---

##### `CharLengthSemantics`<sup>Optional</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```go
CharLengthSemantics *string
```

- *Type:* *string

Specifies whether the length of a character column is in bytes or in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}

---

##### `DirectPathNoLog`<sup>Optional</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```go
DirectPathNoLog interface{}
```

- *Type:* interface{}

When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}

---

##### `DirectPathParallelLoad`<sup>Optional</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```go
DirectPathParallelLoad interface{}
```

- *Type:* interface{}

When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}

---

##### `EnableHomogenousTablespace`<sup>Optional</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```go
EnableHomogenousTablespace interface{}
```

- *Type:* interface{}

Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}

---

##### `ExtraArchivedLogDestIds`<sup>Optional</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```go
ExtraArchivedLogDestIds *[]*f64
```

- *Type:* *[]*f64

Specifies the IDs of one more destinations for one or more archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}

---

##### `FailTasksOnLobTruncation`<sup>Optional</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

```go
FailTasksOnLobTruncation interface{}
```

- *Type:* interface{}

When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `NumberDatatypeScale`<sup>Optional</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```go
NumberDatatypeScale *f64
```

- *Type:* *f64

Specifies the number scale.

You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}

---

##### `OraclePathPrefix`<sup>Optional</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```go
OraclePathPrefix *string
```

- *Type:* *string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}

---

##### `ParallelAsmReadThreads`<sup>Optional</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```go
ParallelAsmReadThreads *f64
```

- *Type:* *f64

Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}

---

##### `ReadAheadBlocks`<sup>Optional</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```go
ReadAheadBlocks *f64
```

- *Type:* *f64

Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}

---

##### `ReadTableSpaceName`<sup>Optional</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```go
ReadTableSpaceName interface{}
```

- *Type:* interface{}

When set to true, this attribute supports tablespace replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}

---

##### `ReplacePathPrefix`<sup>Optional</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```go
ReplacePathPrefix interface{}
```

- *Type:* interface{}

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}

---

##### `RetryInterval`<sup>Optional</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```go
RetryInterval *f64
```

- *Type:* *f64

Specifies the number of seconds that the system waits before resending a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
SecretsManagerOracleAsmAccessRoleArn *string
```

- *Type:* *string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```go
SecretsManagerOracleAsmSecretId *string
```

- *Type:* *string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SecurityDbEncryption`<sup>Optional</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```go
SecurityDbEncryption *string
```

- *Type:* *string

For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}

---

##### `SecurityDbEncryptionName`<sup>Optional</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```go
SecurityDbEncryptionName *string
```

- *Type:* *string

For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```go
SpatialDataOptionToGeoJsonFunctionName *string
```

- *Type:* *string

Use this attribute to convert SDO_GEOMETRY to GEOJSON format.

By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}

---

##### `StandbyDelayTime`<sup>Optional</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```go
StandbyDelayTime *f64
```

- *Type:* *f64

Use this attribute to specify a time in minutes for the delay in standby sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}

---

##### `UseAlternateFolderForOnline`<sup>Optional</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```go
UseAlternateFolderForOnline interface{}
```

- *Type:* interface{}

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}

---

##### `UseBFile`<sup>Optional</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile"></a>

```go
UseBFile interface{}
```

- *Type:* interface{}

Set this attribute to True to capture change data using the Binary Reader utility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_b_file DmsEndpoint#use_b_file}

---

##### `UseDirectPathFullLoad`<sup>Optional</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```go
UseDirectPathFullLoad interface{}
```

- *Type:* interface{}

Set this attribute to True to have AWS DMS use a direct path full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}

---

##### `UseLogminerReader`<sup>Optional</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```go
UseLogminerReader interface{}
```

- *Type:* interface{}

Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}

---

##### `UsePathPrefix`<sup>Optional</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```go
UsePathPrefix *string
```

- *Type:* *string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}

---

### DmsEndpointPostgreSqlSettings <a name="DmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointPostgreSqlSettings {
	AfterConnectScript: *string,
	BabelfishDatabaseName: *string,
	CaptureDdls: interface{},
	DatabaseMode: *string,
	DdlArtifactsSchema: *string,
	ExecuteTimeout: *f64,
	FailTasksOnLobTruncation: interface{},
	HeartbeatEnable: interface{},
	HeartbeatFrequency: *f64,
	HeartbeatSchema: *string,
	MapBooleanAsBoolean: interface{},
	MaxFileSize: *f64,
	PluginName: *string,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	SlotName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>*string</code> | The Babelfish for Aurora PostgreSQL database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls">CaptureDdls</a></code> | <code>interface{}</code> | To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode">DatabaseMode</a></code> | <code>*string</code> | Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>*string</code> | The schema in which the operational DDL database artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout">ExecuteTimeout</a></code> | <code>*f64</code> | Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>interface{}</code> | When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>interface{}</code> | The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>*f64</code> | Sets the WAL heartbeat frequency (in minutes). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>*string</code> | Sets the schema in which the heartbeat artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>interface{}</code> | When true, lets PostgreSQL migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the plugin to use to create a replication slot. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName">SlotName</a></code> | <code>*string</code> | Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript"></a>

```go
AfterConnectScript *string
```

- *Type:* *string

For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `BabelfishDatabaseName`<sup>Optional</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName"></a>

```go
BabelfishDatabaseName *string
```

- *Type:* *string

The Babelfish for Aurora PostgreSQL database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}

---

##### `CaptureDdls`<sup>Optional</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls"></a>

```go
CaptureDdls interface{}
```

- *Type:* interface{}

To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.

You can later remove these artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}

---

##### `DatabaseMode`<sup>Optional</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode"></a>

```go
DatabaseMode *string
```

- *Type:* *string

Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}

---

##### `DdlArtifactsSchema`<sup>Optional</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

```go
DdlArtifactsSchema *string
```

- *Type:* *string

The schema in which the operational DDL database artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}

---

##### `ExecuteTimeout`<sup>Optional</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout"></a>

```go
ExecuteTimeout *f64
```

- *Type:* *f64

Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}

---

##### `FailTasksOnLobTruncation`<sup>Optional</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

```go
FailTasksOnLobTruncation interface{}
```

- *Type:* interface{}

When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `HeartbeatEnable`<sup>Optional</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable"></a>

```go
HeartbeatEnable interface{}
```

- *Type:* interface{}

The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}

---

##### `HeartbeatFrequency`<sup>Optional</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency"></a>

```go
HeartbeatFrequency *f64
```

- *Type:* *f64

Sets the WAL heartbeat frequency (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}

---

##### `HeartbeatSchema`<sup>Optional</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema"></a>

```go
HeartbeatSchema *string
```

- *Type:* *string

Sets the schema in which the heartbeat artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}

---

##### `MapBooleanAsBoolean`<sup>Optional</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean"></a>

```go
MapBooleanAsBoolean interface{}
```

- *Type:* interface{}

When true, lets PostgreSQL migrate the boolean type as boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the plugin to use to create a replication slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `SlotName`<sup>Optional</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName"></a>

```go
SlotName *string
```

- *Type:* *string

Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointRedisSettings {
	AuthPassword: *string,
	AuthType: *string,
	AuthUserName: *string,
	Port: *f64,
	ServerName: *string,
	SslCaCertificateArn: *string,
	SslSecurityProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">AuthPassword</a></code> | <code>*string</code> | The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType">AuthType</a></code> | <code>*string</code> | The type of authentication to perform when connecting to a Redis target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">AuthUserName</a></code> | <code>*string</code> | The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port">Port</a></code> | <code>*f64</code> | Transmission Control Protocol (TCP) port for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>*string</code> | The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption. |

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```go
AuthPassword *string
```

- *Type:* *string

The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The type of authentication to perform when connecting to a Redis target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `AuthUserName`<sup>Optional</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```go
AuthUserName *string
```

- *Type:* *string

The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Transmission Control Protocol (TCP) port for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Fully qualified domain name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```go
SslCaCertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `SslSecurityProtocol`<sup>Optional</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```go
SslSecurityProtocol *string
```

- *Type:* *string

The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointRedshiftSettings {
	AcceptAnyDate: interface{},
	AfterConnectScript: *string,
	BucketFolder: *string,
	BucketName: *string,
	CaseSensitiveNames: interface{},
	CompUpdate: interface{},
	ConnectionTimeout: *f64,
	DateFormat: *string,
	EmptyAsNull: interface{},
	EncryptionMode: *string,
	ExplicitIds: interface{},
	FileTransferUploadStreams: *f64,
	LoadTimeout: *f64,
	MapBooleanAsBoolean: interface{},
	MaxFileSize: *f64,
	RemoveQuotes: interface{},
	ReplaceChars: *string,
	ReplaceInvalidChars: *string,
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
	ServerSideEncryptionKmsKeyId: *string,
	ServiceAccessRoleArn: *string,
	TimeFormat: *string,
	TrimBlanks: interface{},
	TruncateColumns: interface{},
	WriteBufferSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>interface{}</code> | A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | Code to run after connecting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate">CompUpdate</a></code> | <code>interface{}</code> | If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat">DateFormat</a></code> | <code>*string</code> | The date format that you are using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull">EmptyAsNull</a></code> | <code>interface{}</code> | A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds">ExplicitIds</a></code> | <code>interface{}</code> | This setting is only valid for a full-load migration task. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>*f64</code> | The number of threads used to upload a single file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>interface{}</code> | When true, lets Redshift migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes">RemoveQuotes</a></code> | <code>interface{}</code> | A value that specifies to remove surrounding quotation marks from strings in the incoming data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars">ReplaceChars</a></code> | <code>*string</code> | A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>*string</code> | A list of characters that you want to replace. Use with ReplaceChars. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks">TrimBlanks</a></code> | <code>interface{}</code> | A value that specifies to remove the trailing white space characters from a VARCHAR string. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns">TruncateColumns</a></code> | <code>interface{}</code> | A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB). |

---

##### `AcceptAnyDate`<sup>Optional</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate"></a>

```go
AcceptAnyDate interface{}
```

- *Type:* interface{}

A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error.

You can choose true or false (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#accept_any_date DmsEndpoint#accept_any_date}

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript"></a>

```go
AfterConnectScript *string
```

- *Type:* *string

Code to run after connecting.

This parameter should contain the code itself, not the name of a file containing the code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```go
BucketFolder *string
```

- *Type:* *string

An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames"></a>

```go
CaseSensitiveNames interface{}
```

- *Type:* interface{}

If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#case_sensitive_names DmsEndpoint#case_sensitive_names}

---

##### `CompUpdate`<sup>Optional</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate"></a>

```go
CompUpdate interface{}
```

- *Type:* interface{}

If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#comp_update DmsEndpoint#comp_update}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout"></a>

```go
ConnectionTimeout *f64
```

- *Type:* *f64

A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#connection_timeout DmsEndpoint#connection_timeout}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

The date format that you are using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#date_format DmsEndpoint#date_format}

---

##### `EmptyAsNull`<sup>Optional</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull"></a>

```go
EmptyAsNull interface{}
```

- *Type:* interface{}

A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL.

A value of true sets empty CHAR and VARCHAR fields to null. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#empty_as_null DmsEndpoint#empty_as_null}

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```go
EncryptionMode *string
```

- *Type:* *string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `ExplicitIds`<sup>Optional</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds"></a>

```go
ExplicitIds interface{}
```

- *Type:* interface{}

This setting is only valid for a full-load migration task.

Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#explicit_ids DmsEndpoint#explicit_ids}

---

##### `FileTransferUploadStreams`<sup>Optional</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

```go
FileTransferUploadStreams *f64
```

- *Type:* *f64

The number of threads used to upload a single file.

This parameter accepts a value from 1 through 64. It defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#file_transfer_upload_streams DmsEndpoint#file_transfer_upload_streams}

---

##### `LoadTimeout`<sup>Optional</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout"></a>

```go
LoadTimeout *f64
```

- *Type:* *f64

The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `MapBooleanAsBoolean`<sup>Optional</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean"></a>

```go
MapBooleanAsBoolean interface{}
```

- *Type:* interface{}

When true, lets Redshift migrate the boolean type as boolean.

By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `RemoveQuotes`<sup>Optional</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes"></a>

```go
RemoveQuotes interface{}
```

- *Type:* interface{}

A value that specifies to remove surrounding quotation marks from strings in the incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#remove_quotes DmsEndpoint#remove_quotes}

---

##### `ReplaceChars`<sup>Optional</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars"></a>

```go
ReplaceChars *string
```

- *Type:* *string

A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead.

The default is "?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#replace_chars DmsEndpoint#replace_chars}

---

##### `ReplaceInvalidChars`<sup>Optional</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars"></a>

```go
ReplaceInvalidChars *string
```

- *Type:* *string

A list of characters that you want to replace. Use with ReplaceChars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#replace_invalid_chars DmsEndpoint#replace_invalid_chars}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```go
ServerSideEncryptionKmsKeyId *string
```

- *Type:* *string

The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#time_format DmsEndpoint#time_format}

---

##### `TrimBlanks`<sup>Optional</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks"></a>

```go
TrimBlanks interface{}
```

- *Type:* interface{}

A value that specifies to remove the trailing white space characters from a VARCHAR string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#trim_blanks DmsEndpoint#trim_blanks}

---

##### `TruncateColumns`<sup>Optional</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns"></a>

```go
TruncateColumns interface{}
```

- *Type:* interface{}

A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#truncate_columns DmsEndpoint#truncate_columns}

---

##### `WriteBufferSize`<sup>Optional</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize"></a>

```go
WriteBufferSize *f64
```

- *Type:* *f64

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointS3Settings {
	AddColumnName: interface{},
	AddTrailingPaddingCharacter: interface{},
	BucketFolder: *string,
	BucketName: *string,
	CannedAclForObjects: *string,
	CdcInsertsAndUpdates: interface{},
	CdcInsertsOnly: interface{},
	CdcMaxBatchInterval: *f64,
	CdcMinFileSize: *f64,
	CdcPath: *string,
	CompressionType: *string,
	CsvDelimiter: *string,
	CsvNoSupValue: *string,
	CsvNullValue: *string,
	CsvRowDelimiter: *string,
	DataFormat: *string,
	DataPageSize: *f64,
	DatePartitionDelimiter: *string,
	DatePartitionEnabled: interface{},
	DatePartitionSequence: *string,
	DatePartitionTimezone: *string,
	DictPageSizeLimit: *f64,
	EnableStatistics: interface{},
	EncodingType: *string,
	EncryptionMode: *string,
	ExpectedBucketOwner: *string,
	ExternalTableDefinition: *string,
	GlueCatalogGeneration: interface{},
	IgnoreHeaderRows: *f64,
	IncludeOpForFullLoad: interface{},
	MaxFileSize: *f64,
	ParquetTimestampInMillisecond: interface{},
	ParquetVersion: *string,
	PreserveTransactions: interface{},
	Rfc4180: interface{},
	RowGroupLength: *f64,
	ServerSideEncryptionKmsKeyId: *string,
	ServiceAccessRoleArn: *string,
	TimestampColumnName: *string,
	UseCsvNoSupValue: interface{},
	UseTaskStartTimeForFullLoadTimestamp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">AddColumnName</a></code> | <code>interface{}</code> | An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>interface{}</code> | Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>interface{}</code> | A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>interface{}</code> | A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">CdcPath</a></code> | <code>*string</code> | Specifies the folder path of CDC files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">CompressionType</a></code> | <code>*string</code> | An optional parameter. When set to GZIP it enables the service to compress the target files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">DataFormat</a></code> | <code>*string</code> | The format of the data that you want to use for output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | The size of one data page in bytes. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | Specifies a date separating delimiter to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>interface{}</code> | When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | Identifies the sequence of the date format to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>*string</code> | When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | The maximum size of an encoded dictionary page of a column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">EnableStatistics</a></code> | <code>interface{}</code> | A value that enables statistics for Parquet pages and row groups. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">EncodingType</a></code> | <code>*string</code> | The type of encoding that you're using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | The external table definition. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>interface{}</code> | When true, allows AWS Glue to catalog your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>interface{}</code> | A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>interface{}</code> | A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">PreserveTransactions</a></code> | <code>interface{}</code> | If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">Rfc4180</a></code> | <code>interface{}</code> | For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | The number of rows in a row group. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>interface{}</code> | This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>interface{}</code> | When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. |

---

##### `AddColumnName`<sup>Optional</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```go
AddColumnName interface{}
```

- *Type:* interface{}

An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#add_column_name DmsEndpoint#add_column_name}

---

##### `AddTrailingPaddingCharacter`<sup>Optional</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter"></a>

```go
AddTrailingPaddingCharacter interface{}
```

- *Type:* interface{}

Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#add_trailing_padding_character DmsEndpoint#add_trailing_padding_character}

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```go
BucketFolder *string
```

- *Type:* *string

An optional parameter to set a folder name in the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `CannedAclForObjects`<sup>Optional</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```go
CannedAclForObjects *string
```

- *Type:* *string

A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}

---

##### `CdcInsertsAndUpdates`<sup>Optional</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```go
CdcInsertsAndUpdates interface{}
```

- *Type:* interface{}

A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}

---

##### `CdcInsertsOnly`<sup>Optional</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```go
CdcInsertsOnly interface{}
```

- *Type:* interface{}

A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}

---

##### `CdcMaxBatchInterval`<sup>Optional</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```go
CdcMaxBatchInterval *f64
```

- *Type:* *f64

Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}

---

##### `CdcMinFileSize`<sup>Optional</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```go
CdcMinFileSize *f64
```

- *Type:* *f64

Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}

---

##### `CdcPath`<sup>Optional</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```go
CdcPath *string
```

- *Type:* *string

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#cdc_path DmsEndpoint#cdc_path}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

An optional parameter. When set to GZIP it enables the service to compress the target files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}

---

##### `CsvDelimiter`<sup>Optional</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```go
CsvDelimiter *string
```

- *Type:* *string

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}

---

##### `CsvNoSupValue`<sup>Optional</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```go
CsvNoSupValue *string
```

- *Type:* *string

This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}

---

##### `CsvNullValue`<sup>Optional</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```go
CsvNullValue *string
```

- *Type:* *string

An optional parameter that specifies how AWS DMS treats null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}

---

##### `CsvRowDelimiter`<sup>Optional</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```go
CsvRowDelimiter *string
```

- *Type:* *string

The delimiter used to separate rows in the .csv file for both source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

The format of the data that you want to use for output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}

---

##### `DataPageSize`<sup>Optional</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```go
DataPageSize *f64
```

- *Type:* *f64

The size of one data page in bytes.

This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#data_page_size DmsEndpoint#data_page_size}

---

##### `DatePartitionDelimiter`<sup>Optional</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```go
DatePartitionDelimiter *string
```

- *Type:* *string

Specifies a date separating delimiter to use during folder partitioning.

The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}

---

##### `DatePartitionEnabled`<sup>Optional</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```go
DatePartitionEnabled interface{}
```

- *Type:* interface{}

When set to true, this parameter partitions S3 bucket folders based on transaction commit dates.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}

---

##### `DatePartitionSequence`<sup>Optional</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```go
DatePartitionSequence *string
```

- *Type:* *string

Identifies the sequence of the date format to use during folder partitioning.

The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}

---

##### `DatePartitionTimezone`<sup>Optional</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone"></a>

```go
DatePartitionTimezone *string
```

- *Type:* *string

When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#date_partition_timezone DmsEndpoint#date_partition_timezone}

---

##### `DictPageSizeLimit`<sup>Optional</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```go
DictPageSizeLimit *f64
```

- *Type:* *f64

The maximum size of an encoded dictionary page of a column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}

---

##### `EnableStatistics`<sup>Optional</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```go
EnableStatistics interface{}
```

- *Type:* interface{}

A value that enables statistics for Parquet pages and row groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```go
EncodingType *string
```

- *Type:* *string

The type of encoding that you're using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#encoding_type DmsEndpoint#encoding_type}

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```go
EncryptionMode *string
```

- *Type:* *string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#expected_bucket_owner DmsEndpoint#expected_bucket_owner}

---

##### `ExternalTableDefinition`<sup>Optional</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```go
ExternalTableDefinition *string
```

- *Type:* *string

The external table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}

---

##### `GlueCatalogGeneration`<sup>Optional</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration"></a>

```go
GlueCatalogGeneration interface{}
```

- *Type:* interface{}

When true, allows AWS Glue to catalog your S3 bucket.

Creating an AWS Glue catalog lets you use Athena to query your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#glue_catalog_generation DmsEndpoint#glue_catalog_generation}

---

##### `IgnoreHeaderRows`<sup>Optional</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```go
IgnoreHeaderRows *f64
```

- *Type:* *f64

When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}

---

##### `IncludeOpForFullLoad`<sup>Optional</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```go
IncludeOpForFullLoad interface{}
```

- *Type:* interface{}

A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `ParquetTimestampInMillisecond`<sup>Optional</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```go
ParquetTimestampInMillisecond interface{}
```

- *Type:* interface{}

A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}

---

##### `ParquetVersion`<sup>Optional</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```go
ParquetVersion *string
```

- *Type:* *string

The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}

---

##### `PreserveTransactions`<sup>Optional</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```go
PreserveTransactions interface{}
```

- *Type:* interface{}

If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}

---

##### `Rfc4180`<sup>Optional</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```go
Rfc4180 interface{}
```

- *Type:* interface{}

For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}

---

##### `RowGroupLength`<sup>Optional</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```go
RowGroupLength *f64
```

- *Type:* *f64

The number of rows in a row group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#row_group_length DmsEndpoint#row_group_length}

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```go
ServerSideEncryptionKmsKeyId *string
```

- *Type:* *string

If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID.

The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `TimestampColumnName`<sup>Optional</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```go
TimestampColumnName *string
```

- *Type:* *string

A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}

---

##### `UseCsvNoSupValue`<sup>Optional</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```go
UseCsvNoSupValue interface{}
```

- *Type:* interface{}

This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
UseTaskStartTimeForFullLoadTimestamp interface{}
```

- *Type:* interface{}

When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}

---

### DmsEndpointSybaseSettings <a name="DmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointSybaseSettings {
	SecretsManagerAccessRoleArn: *string,
	SecretsManagerSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details. |

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn"></a>

```go
SecretsManagerAccessRoleArn *string
```

- *Type:* *string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId"></a>

```go
SecretsManagerSecretId *string
```

- *Type:* *string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointTags <a name="DmsEndpointTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

&dmsendpoint.DmsEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key">Key</a></code> | <code>*string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value">Value</a></code> | <code>*string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key is the required name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#key DmsEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A value is the optional value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_endpoint#value DmsEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointDocDbSettingsOutputReference <a name="DmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointDocDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointDocDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate"></a>

```go
func ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId"></a>

```go
func ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel"></a>

```go
func ResetNestingLevel()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```go
func DocsToInvestigateInput() *f64
```

- *Type:* *f64

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput"></a>

```go
func ExtractDocIdInput() interface{}
```

- *Type:* interface{}

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput"></a>

```go
func NestingLevelInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```go
func DocsToInvestigate() *f64
```

- *Type:* *f64

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```go
func ExtractDocId() interface{}
```

- *Type:* interface{}

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```go
func NestingLevel() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointDynamoDbSettingsOutputReference <a name="DmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointDynamoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointDynamoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointElasticsearchSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointElasticsearchSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointUri` <a name="ResetEndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri"></a>

```go
func ResetEndpointUri()
```

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```go
func ResetErrorRetryDuration()
```

##### `ResetFullLoadErrorPercentage` <a name="ResetFullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```go
func ResetFullLoadErrorPercentage()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">EndpointUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">FullLoadErrorPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```go
func EndpointUriInput() *string
```

- *Type:* *string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```go
func ErrorRetryDurationInput() *f64
```

- *Type:* *f64

---

##### `FullLoadErrorPercentageInput`<sup>Optional</sup> <a name="FullLoadErrorPercentageInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```go
func FullLoadErrorPercentageInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```go
func ErrorRetryDuration() *f64
```

- *Type:* *f64

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```go
func FullLoadErrorPercentage() *f64
```

- *Type:* *f64

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointGcpMySqlSettingsOutputReference <a name="DmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointGcpMySqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointGcpMySqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```go
func ResetAfterConnectScript()
```

##### `ResetCleanSourceMetadataOnMismatch` <a name="ResetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```go
func ResetCleanSourceMetadataOnMismatch()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetEventsPollInterval` <a name="ResetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```go
func ResetEventsPollInterval()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetParallelLoadThreads` <a name="ResetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```go
func ResetParallelLoadThreads()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetServerTimezone` <a name="ResetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone"></a>

```go
func ResetServerTimezone()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">CleanSourceMetadataOnMismatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput">EventsPollIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput">ParallelLoadThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput">ServerTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```go
func AfterConnectScriptInput() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```go
func CleanSourceMetadataOnMismatchInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EventsPollIntervalInput`<sup>Optional</sup> <a name="EventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```go
func EventsPollIntervalInput() *f64
```

- *Type:* *f64

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreadsInput`<sup>Optional</sup> <a name="ParallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```go
func ParallelLoadThreadsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `ServerTimezoneInput`<sup>Optional</sup> <a name="ServerTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```go
func ServerTimezoneInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```go
func CleanSourceMetadataOnMismatch() interface{}
```

- *Type:* interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```go
func EventsPollInterval() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```go
func ParallelLoadThreads() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```go
func ServerTimezone() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointIbmDb2SettingsOutputReference <a name="DmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointIbmDb2SettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointIbmDb2SettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrentLsn` <a name="ResetCurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn"></a>

```go
func ResetCurrentLsn()
```

##### `ResetKeepCsvFiles` <a name="ResetKeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles"></a>

```go
func ResetKeepCsvFiles()
```

##### `ResetLoadTimeout` <a name="ResetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout"></a>

```go
func ResetLoadTimeout()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMaxKBytesPerRead` <a name="ResetMaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead"></a>

```go
func ResetMaxKBytesPerRead()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetSetDataCaptureChanges` <a name="ResetSetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges"></a>

```go
func ResetSetDataCaptureChanges()
```

##### `ResetWriteBufferSize` <a name="ResetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize"></a>

```go
func ResetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput">CurrentLsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput">KeepCsvFilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput">LoadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput">MaxKBytesPerReadInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput">SetDataCaptureChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput">WriteBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">CurrentLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentLsnInput`<sup>Optional</sup> <a name="CurrentLsnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput"></a>

```go
func CurrentLsnInput() *string
```

- *Type:* *string

---

##### `KeepCsvFilesInput`<sup>Optional</sup> <a name="KeepCsvFilesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput"></a>

```go
func KeepCsvFilesInput() interface{}
```

- *Type:* interface{}

---

##### `LoadTimeoutInput`<sup>Optional</sup> <a name="LoadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput"></a>

```go
func LoadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxKBytesPerReadInput`<sup>Optional</sup> <a name="MaxKBytesPerReadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput"></a>

```go
func MaxKBytesPerReadInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `SetDataCaptureChangesInput`<sup>Optional</sup> <a name="SetDataCaptureChangesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput"></a>

```go
func SetDataCaptureChangesInput() interface{}
```

- *Type:* interface{}

---

##### `WriteBufferSizeInput`<sup>Optional</sup> <a name="WriteBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput"></a>

```go
func WriteBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `CurrentLsn`<sup>Required</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```go
func CurrentLsn() *string
```

- *Type:* *string

---

##### `KeepCsvFiles`<sup>Required</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```go
func KeepCsvFiles() interface{}
```

- *Type:* interface{}

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```go
func LoadTimeout() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MaxKBytesPerRead`<sup>Required</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```go
func MaxKBytesPerRead() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SetDataCaptureChanges`<sup>Required</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```go
func SetDataCaptureChanges() interface{}
```

- *Type:* interface{}

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```go
func WriteBufferSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointKafkaSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointKafkaSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBroker` <a name="ResetBroker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker"></a>

```go
func ResetBroker()
```

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```go
func ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```go
func ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```go
func ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```go
func ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```go
func ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```go
func ResetMessageFormat()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```go
func ResetMessageMaxBytes()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```go
func ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```go
func ResetPartitionIncludeSchemaTable()
```

##### `ResetSaslPassword` <a name="ResetSaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```go
func ResetSaslPassword()
```

##### `ResetSaslUserName` <a name="ResetSaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName"></a>

```go
func ResetSaslUserName()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```go
func ResetSecurityProtocol()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```go
func ResetSslCaCertificateArn()
```

##### `ResetSslClientCertificateArn` <a name="ResetSslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```go
func ResetSslClientCertificateArn()
```

##### `ResetSslClientKeyArn` <a name="ResetSslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```go
func ResetSslClientKeyArn()
```

##### `ResetSslClientKeyPassword` <a name="ResetSslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```go
func ResetSslClientKeyPassword()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">BrokerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">SaslPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput">SaslUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">SslClientCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">SslClientKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">SslClientKeyPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName">SaslUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrokerInput`<sup>Optional</sup> <a name="BrokerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```go
func BrokerInput() *string
```

- *Type:* *string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```go
func IncludeControlDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```go
func IncludeNullAndEmptyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```go
func IncludePartitionValueInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```go
func IncludeTableAlterOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```go
func IncludeTransactionDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```go
func MessageFormatInput() *string
```

- *Type:* *string

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```go
func MessageMaxBytesInput() *f64
```

- *Type:* *f64

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```go
func NoHexPrefixInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```go
func PartitionIncludeSchemaTableInput() interface{}
```

- *Type:* interface{}

---

##### `SaslPasswordInput`<sup>Optional</sup> <a name="SaslPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```go
func SaslPasswordInput() *string
```

- *Type:* *string

---

##### `SaslUserNameInput`<sup>Optional</sup> <a name="SaslUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput"></a>

```go
func SaslUserNameInput() *string
```

- *Type:* *string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```go
func SecurityProtocolInput() *string
```

- *Type:* *string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```go
func SslCaCertificateArnInput() *string
```

- *Type:* *string

---

##### `SslClientCertificateArnInput`<sup>Optional</sup> <a name="SslClientCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```go
func SslClientCertificateArnInput() *string
```

- *Type:* *string

---

##### `SslClientKeyArnInput`<sup>Optional</sup> <a name="SslClientKeyArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```go
func SslClientKeyArnInput() *string
```

- *Type:* *string

---

##### `SslClientKeyPasswordInput`<sup>Optional</sup> <a name="SslClientKeyPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```go
func SslClientKeyPasswordInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```go
func Broker() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() interface{}
```

- *Type:* interface{}

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() interface{}
```

- *Type:* interface{}

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() interface{}
```

- *Type:* interface{}

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() interface{}
```

- *Type:* interface{}

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() interface{}
```

- *Type:* interface{}

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```go
func MessageMaxBytes() *f64
```

- *Type:* *f64

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```go
func NoHexPrefix() interface{}
```

- *Type:* interface{}

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() interface{}
```

- *Type:* interface{}

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```go
func SaslPassword() *string
```

- *Type:* *string

---

##### `SaslUserName`<sup>Required</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```go
func SaslUserName() *string
```

- *Type:* *string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```go
func SecurityProtocol() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```go
func SslClientCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```go
func SslClientKeyArn() *string
```

- *Type:* *string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```go
func SslClientKeyPassword() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointKinesisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointKinesisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```go
func ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```go
func ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```go
func ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```go
func ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```go
func ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```go
func ResetMessageFormat()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix"></a>

```go
func ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```go
func ResetPartitionIncludeSchemaTable()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```go
func ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```go
func IncludeControlDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```go
func IncludeNullAndEmptyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```go
func IncludePartitionValueInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```go
func IncludeTableAlterOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```go
func IncludeTransactionDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```go
func MessageFormatInput() *string
```

- *Type:* *string

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput"></a>

```go
func NoHexPrefixInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```go
func PartitionIncludeSchemaTableInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() interface{}
```

- *Type:* interface{}

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() interface{}
```

- *Type:* interface{}

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() interface{}
```

- *Type:* interface{}

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() interface{}
```

- *Type:* interface{}

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() interface{}
```

- *Type:* interface{}

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```go
func NoHexPrefix() interface{}
```

- *Type:* interface{}

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointMicrosoftSqlServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointMicrosoftSqlServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBcpPacketSize` <a name="ResetBcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize"></a>

```go
func ResetBcpPacketSize()
```

##### `ResetControlTablesFileGroup` <a name="ResetControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup"></a>

```go
func ResetControlTablesFileGroup()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetForceLobLookup` <a name="ResetForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup"></a>

```go
func ResetForceLobLookup()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetQuerySingleAlwaysOnNode` <a name="ResetQuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode"></a>

```go
func ResetQuerySingleAlwaysOnNode()
```

##### `ResetReadBackupOnly` <a name="ResetReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly"></a>

```go
func ResetReadBackupOnly()
```

##### `ResetSafeguardPolicy` <a name="ResetSafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy"></a>

```go
func ResetSafeguardPolicy()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetTlogAccessMode` <a name="ResetTlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode"></a>

```go
func ResetTlogAccessMode()
```

##### `ResetTrimSpaceInChar` <a name="ResetTrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar"></a>

```go
func ResetTrimSpaceInChar()
```

##### `ResetUseBcpFullLoad` <a name="ResetUseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad"></a>

```go
func ResetUseBcpFullLoad()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUseThirdPartyBackupDevice` <a name="ResetUseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice"></a>

```go
func ResetUseThirdPartyBackupDevice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput">BcpPacketSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput">ControlTablesFileGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput">ForceLobLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput">QuerySingleAlwaysOnNodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput">ReadBackupOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput">SafeguardPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput">TlogAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput">TrimSpaceInCharInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput">UseBcpFullLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput">UseThirdPartyBackupDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">BcpPacketSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">ForceLobLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">ReadBackupOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">TlogAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BcpPacketSizeInput`<sup>Optional</sup> <a name="BcpPacketSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput"></a>

```go
func BcpPacketSizeInput() *f64
```

- *Type:* *f64

---

##### `ControlTablesFileGroupInput`<sup>Optional</sup> <a name="ControlTablesFileGroupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput"></a>

```go
func ControlTablesFileGroupInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `ForceLobLookupInput`<sup>Optional</sup> <a name="ForceLobLookupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput"></a>

```go
func ForceLobLookupInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `QuerySingleAlwaysOnNodeInput`<sup>Optional</sup> <a name="QuerySingleAlwaysOnNodeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput"></a>

```go
func QuerySingleAlwaysOnNodeInput() interface{}
```

- *Type:* interface{}

---

##### `ReadBackupOnlyInput`<sup>Optional</sup> <a name="ReadBackupOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput"></a>

```go
func ReadBackupOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `SafeguardPolicyInput`<sup>Optional</sup> <a name="SafeguardPolicyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput"></a>

```go
func SafeguardPolicyInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TlogAccessModeInput`<sup>Optional</sup> <a name="TlogAccessModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput"></a>

```go
func TlogAccessModeInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInCharInput`<sup>Optional</sup> <a name="TrimSpaceInCharInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput"></a>

```go
func TrimSpaceInCharInput() interface{}
```

- *Type:* interface{}

---

##### `UseBcpFullLoadInput`<sup>Optional</sup> <a name="UseBcpFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput"></a>

```go
func UseBcpFullLoadInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UseThirdPartyBackupDeviceInput`<sup>Optional</sup> <a name="UseThirdPartyBackupDeviceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput"></a>

```go
func UseThirdPartyBackupDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `BcpPacketSize`<sup>Required</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```go
func BcpPacketSize() *f64
```

- *Type:* *f64

---

##### `ControlTablesFileGroup`<sup>Required</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```go
func ControlTablesFileGroup() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ForceLobLookup`<sup>Required</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```go
func ForceLobLookup() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `QuerySingleAlwaysOnNode`<sup>Required</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```go
func QuerySingleAlwaysOnNode() interface{}
```

- *Type:* interface{}

---

##### `ReadBackupOnly`<sup>Required</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```go
func ReadBackupOnly() interface{}
```

- *Type:* interface{}

---

##### `SafeguardPolicy`<sup>Required</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```go
func SafeguardPolicy() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `TlogAccessMode`<sup>Required</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```go
func TlogAccessMode() *string
```

- *Type:* *string

---

##### `TrimSpaceInChar`<sup>Required</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```go
func TrimSpaceInChar() interface{}
```

- *Type:* interface{}

---

##### `UseBcpFullLoad`<sup>Required</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```go
func UseBcpFullLoad() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UseThirdPartyBackupDevice`<sup>Required</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```go
func UseThirdPartyBackupDevice() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointMongoDbSettingsOutputReference <a name="DmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointMongoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointMongoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```go
func ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource"></a>

```go
func ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate"></a>

```go
func ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId"></a>

```go
func ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel"></a>

```go
func ResetNestingLevel()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```go
func AuthMechanismInput() *string
```

- *Type:* *string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput"></a>

```go
func AuthSourceInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```go
func DocsToInvestigateInput() *string
```

- *Type:* *string

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput"></a>

```go
func ExtractDocIdInput() *string
```

- *Type:* *string

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput"></a>

```go
func NestingLevelInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```go
func AuthMechanism() *string
```

- *Type:* *string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```go
func AuthSource() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```go
func DocsToInvestigate() *string
```

- *Type:* *string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```go
func ExtractDocId() *string
```

- *Type:* *string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```go
func NestingLevel() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointMySqlSettingsOutputReference <a name="DmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointMySqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointMySqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```go
func ResetAfterConnectScript()
```

##### `ResetCleanSourceMetadataOnMismatch` <a name="ResetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```go
func ResetCleanSourceMetadataOnMismatch()
```

##### `ResetEventsPollInterval` <a name="ResetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```go
func ResetEventsPollInterval()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetParallelLoadThreads` <a name="ResetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```go
func ResetParallelLoadThreads()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetServerTimezone` <a name="ResetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone"></a>

```go
func ResetServerTimezone()
```

##### `ResetTargetDbType` <a name="ResetTargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType"></a>

```go
func ResetTargetDbType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">CleanSourceMetadataOnMismatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput">EventsPollIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput">ParallelLoadThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput">ServerTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput">TargetDbTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType">TargetDbType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```go
func AfterConnectScriptInput() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```go
func CleanSourceMetadataOnMismatchInput() interface{}
```

- *Type:* interface{}

---

##### `EventsPollIntervalInput`<sup>Optional</sup> <a name="EventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```go
func EventsPollIntervalInput() *f64
```

- *Type:* *f64

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreadsInput`<sup>Optional</sup> <a name="ParallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```go
func ParallelLoadThreadsInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerTimezoneInput`<sup>Optional</sup> <a name="ServerTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```go
func ServerTimezoneInput() *string
```

- *Type:* *string

---

##### `TargetDbTypeInput`<sup>Optional</sup> <a name="TargetDbTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput"></a>

```go
func TargetDbTypeInput() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```go
func CleanSourceMetadataOnMismatch() interface{}
```

- *Type:* interface{}

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```go
func EventsPollInterval() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```go
func ParallelLoadThreads() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```go
func ServerTimezone() *string
```

- *Type:* *string

---

##### `TargetDbType`<sup>Required</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```go
func TargetDbType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointNeptuneSettingsOutputReference <a name="DmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointNeptuneSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointNeptuneSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration"></a>

```go
func ResetErrorRetryDuration()
```

##### `ResetIamAuthEnabled` <a name="ResetIamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled"></a>

```go
func ResetIamAuthEnabled()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMaxRetryCount` <a name="ResetMaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount"></a>

```go
func ResetMaxRetryCount()
```

##### `ResetS3BucketFolder` <a name="ResetS3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder"></a>

```go
func ResetS3BucketFolder()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput">IamAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput">MaxRetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput">S3BucketFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">S3BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput"></a>

```go
func ErrorRetryDurationInput() *f64
```

- *Type:* *f64

---

##### `IamAuthEnabledInput`<sup>Optional</sup> <a name="IamAuthEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput"></a>

```go
func IamAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryCountInput`<sup>Optional</sup> <a name="MaxRetryCountInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput"></a>

```go
func MaxRetryCountInput() *f64
```

- *Type:* *f64

---

##### `S3BucketFolderInput`<sup>Optional</sup> <a name="S3BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput"></a>

```go
func S3BucketFolderInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```go
func ErrorRetryDuration() *f64
```

- *Type:* *f64

---

##### `IamAuthEnabled`<sup>Required</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```go
func IamAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MaxRetryCount`<sup>Required</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```go
func MaxRetryCount() *f64
```

- *Type:* *f64

---

##### `S3BucketFolder`<sup>Required</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```go
func S3BucketFolder() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointOracleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointOracleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessAlternateDirectly` <a name="ResetAccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```go
func ResetAccessAlternateDirectly()
```

##### `ResetAdditionalArchivedLogDestId` <a name="ResetAdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```go
func ResetAdditionalArchivedLogDestId()
```

##### `ResetAddSupplementalLogging` <a name="ResetAddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```go
func ResetAddSupplementalLogging()
```

##### `ResetAllowSelectNestedTables` <a name="ResetAllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables"></a>

```go
func ResetAllowSelectNestedTables()
```

##### `ResetArchivedLogDestId` <a name="ResetArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```go
func ResetArchivedLogDestId()
```

##### `ResetArchivedLogsOnly` <a name="ResetArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```go
func ResetArchivedLogsOnly()
```

##### `ResetAsmPassword` <a name="ResetAsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```go
func ResetAsmPassword()
```

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```go
func ResetAsmServer()
```

##### `ResetAsmUser` <a name="ResetAsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```go
func ResetAsmUser()
```

##### `ResetCharLengthSemantics` <a name="ResetCharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```go
func ResetCharLengthSemantics()
```

##### `ResetDirectPathNoLog` <a name="ResetDirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```go
func ResetDirectPathNoLog()
```

##### `ResetDirectPathParallelLoad` <a name="ResetDirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```go
func ResetDirectPathParallelLoad()
```

##### `ResetEnableHomogenousTablespace` <a name="ResetEnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```go
func ResetEnableHomogenousTablespace()
```

##### `ResetExtraArchivedLogDestIds` <a name="ResetExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```go
func ResetExtraArchivedLogDestIds()
```

##### `ResetFailTasksOnLobTruncation` <a name="ResetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```go
func ResetFailTasksOnLobTruncation()
```

##### `ResetNumberDatatypeScale` <a name="ResetNumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```go
func ResetNumberDatatypeScale()
```

##### `ResetOraclePathPrefix` <a name="ResetOraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```go
func ResetOraclePathPrefix()
```

##### `ResetParallelAsmReadThreads` <a name="ResetParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```go
func ResetParallelAsmReadThreads()
```

##### `ResetReadAheadBlocks` <a name="ResetReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```go
func ResetReadAheadBlocks()
```

##### `ResetReadTableSpaceName` <a name="ResetReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```go
func ResetReadTableSpaceName()
```

##### `ResetReplacePathPrefix` <a name="ResetReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```go
func ResetReplacePathPrefix()
```

##### `ResetRetryInterval` <a name="ResetRetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```go
func ResetRetryInterval()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```go
func ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```go
func ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetSecurityDbEncryption` <a name="ResetSecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```go
func ResetSecurityDbEncryption()
```

##### `ResetSecurityDbEncryptionName` <a name="ResetSecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```go
func ResetSecurityDbEncryptionName()
```

##### `ResetSpatialDataOptionToGeoJsonFunctionName` <a name="ResetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```go
func ResetSpatialDataOptionToGeoJsonFunctionName()
```

##### `ResetStandbyDelayTime` <a name="ResetStandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```go
func ResetStandbyDelayTime()
```

##### `ResetUseAlternateFolderForOnline` <a name="ResetUseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```go
func ResetUseAlternateFolderForOnline()
```

##### `ResetUseBFile` <a name="ResetUseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile"></a>

```go
func ResetUseBFile()
```

##### `ResetUseDirectPathFullLoad` <a name="ResetUseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```go
func ResetUseDirectPathFullLoad()
```

##### `ResetUseLogminerReader` <a name="ResetUseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```go
func ResetUseLogminerReader()
```

##### `ResetUsePathPrefix` <a name="ResetUsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```go
func ResetUsePathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">AccessAlternateDirectlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">AdditionalArchivedLogDestIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">AddSupplementalLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput">AllowSelectNestedTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">ArchivedLogDestIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">ArchivedLogsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">AsmPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">AsmUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">CharLengthSemanticsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">DirectPathNoLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">DirectPathParallelLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">EnableHomogenousTablespaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">ExtraArchivedLogDestIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput">FailTasksOnLobTruncationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">NumberDatatypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">OraclePathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">ParallelAsmReadThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">ReadAheadBlocksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">ReadTableSpaceNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">ReplacePathPrefixInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">RetryIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">SecurityDbEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">SecurityDbEncryptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">SpatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">StandbyDelayTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">UseAlternateFolderForOnlineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput">UseBFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">UseDirectPathFullLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">UseLogminerReaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">UsePathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">AsmPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">AsmUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">DirectPathNoLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">RetryInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile">UseBFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">UseLogminerReader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">UsePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessAlternateDirectlyInput`<sup>Optional</sup> <a name="AccessAlternateDirectlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```go
func AccessAlternateDirectlyInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="AdditionalArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```go
func AdditionalArchivedLogDestIdInput() *f64
```

- *Type:* *f64

---

##### `AddSupplementalLoggingInput`<sup>Optional</sup> <a name="AddSupplementalLoggingInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```go
func AddSupplementalLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSelectNestedTablesInput`<sup>Optional</sup> <a name="AllowSelectNestedTablesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput"></a>

```go
func AllowSelectNestedTablesInput() interface{}
```

- *Type:* interface{}

---

##### `ArchivedLogDestIdInput`<sup>Optional</sup> <a name="ArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```go
func ArchivedLogDestIdInput() *f64
```

- *Type:* *f64

---

##### `ArchivedLogsOnlyInput`<sup>Optional</sup> <a name="ArchivedLogsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```go
func ArchivedLogsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `AsmPasswordInput`<sup>Optional</sup> <a name="AsmPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```go
func AsmPasswordInput() *string
```

- *Type:* *string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```go
func AsmServerInput() *string
```

- *Type:* *string

---

##### `AsmUserInput`<sup>Optional</sup> <a name="AsmUserInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```go
func AsmUserInput() *string
```

- *Type:* *string

---

##### `CharLengthSemanticsInput`<sup>Optional</sup> <a name="CharLengthSemanticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```go
func CharLengthSemanticsInput() *string
```

- *Type:* *string

---

##### `DirectPathNoLogInput`<sup>Optional</sup> <a name="DirectPathNoLogInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```go
func DirectPathNoLogInput() interface{}
```

- *Type:* interface{}

---

##### `DirectPathParallelLoadInput`<sup>Optional</sup> <a name="DirectPathParallelLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```go
func DirectPathParallelLoadInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHomogenousTablespaceInput`<sup>Optional</sup> <a name="EnableHomogenousTablespaceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```go
func EnableHomogenousTablespaceInput() interface{}
```

- *Type:* interface{}

---

##### `ExtraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="ExtraArchivedLogDestIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```go
func ExtraArchivedLogDestIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `FailTasksOnLobTruncationInput`<sup>Optional</sup> <a name="FailTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```go
func FailTasksOnLobTruncationInput() interface{}
```

- *Type:* interface{}

---

##### `NumberDatatypeScaleInput`<sup>Optional</sup> <a name="NumberDatatypeScaleInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```go
func NumberDatatypeScaleInput() *f64
```

- *Type:* *f64

---

##### `OraclePathPrefixInput`<sup>Optional</sup> <a name="OraclePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```go
func OraclePathPrefixInput() *string
```

- *Type:* *string

---

##### `ParallelAsmReadThreadsInput`<sup>Optional</sup> <a name="ParallelAsmReadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```go
func ParallelAsmReadThreadsInput() *f64
```

- *Type:* *f64

---

##### `ReadAheadBlocksInput`<sup>Optional</sup> <a name="ReadAheadBlocksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```go
func ReadAheadBlocksInput() *f64
```

- *Type:* *f64

---

##### `ReadTableSpaceNameInput`<sup>Optional</sup> <a name="ReadTableSpaceNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```go
func ReadTableSpaceNameInput() interface{}
```

- *Type:* interface{}

---

##### `ReplacePathPrefixInput`<sup>Optional</sup> <a name="ReplacePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```go
func ReplacePathPrefixInput() interface{}
```

- *Type:* interface{}

---

##### `RetryIntervalInput`<sup>Optional</sup> <a name="RetryIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```go
func RetryIntervalInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```go
func SecretsManagerOracleAsmAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```go
func SecretsManagerOracleAsmSecretIdInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `SecurityDbEncryptionInput`<sup>Optional</sup> <a name="SecurityDbEncryptionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```go
func SecurityDbEncryptionInput() *string
```

- *Type:* *string

---

##### `SecurityDbEncryptionNameInput`<sup>Optional</sup> <a name="SecurityDbEncryptionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```go
func SecurityDbEncryptionNameInput() *string
```

- *Type:* *string

---

##### `SpatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```go
func SpatialDataOptionToGeoJsonFunctionNameInput() *string
```

- *Type:* *string

---

##### `StandbyDelayTimeInput`<sup>Optional</sup> <a name="StandbyDelayTimeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```go
func StandbyDelayTimeInput() *f64
```

- *Type:* *f64

---

##### `UseAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="UseAlternateFolderForOnlineInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```go
func UseAlternateFolderForOnlineInput() interface{}
```

- *Type:* interface{}

---

##### `UseBFileInput`<sup>Optional</sup> <a name="UseBFileInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput"></a>

```go
func UseBFileInput() interface{}
```

- *Type:* interface{}

---

##### `UseDirectPathFullLoadInput`<sup>Optional</sup> <a name="UseDirectPathFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```go
func UseDirectPathFullLoadInput() interface{}
```

- *Type:* interface{}

---

##### `UseLogminerReaderInput`<sup>Optional</sup> <a name="UseLogminerReaderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```go
func UseLogminerReaderInput() interface{}
```

- *Type:* interface{}

---

##### `UsePathPrefixInput`<sup>Optional</sup> <a name="UsePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```go
func UsePathPrefixInput() *string
```

- *Type:* *string

---

##### `AccessAlternateDirectly`<sup>Required</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```go
func AccessAlternateDirectly() interface{}
```

- *Type:* interface{}

---

##### `AdditionalArchivedLogDestId`<sup>Required</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```go
func AdditionalArchivedLogDestId() *f64
```

- *Type:* *f64

---

##### `AddSupplementalLogging`<sup>Required</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```go
func AddSupplementalLogging() interface{}
```

- *Type:* interface{}

---

##### `AllowSelectNestedTables`<sup>Required</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```go
func AllowSelectNestedTables() interface{}
```

- *Type:* interface{}

---

##### `ArchivedLogDestId`<sup>Required</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```go
func ArchivedLogDestId() *f64
```

- *Type:* *f64

---

##### `ArchivedLogsOnly`<sup>Required</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```go
func ArchivedLogsOnly() interface{}
```

- *Type:* interface{}

---

##### `AsmPassword`<sup>Required</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```go
func AsmPassword() *string
```

- *Type:* *string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```go
func AsmServer() *string
```

- *Type:* *string

---

##### `AsmUser`<sup>Required</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```go
func AsmUser() *string
```

- *Type:* *string

---

##### `CharLengthSemantics`<sup>Required</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```go
func CharLengthSemantics() *string
```

- *Type:* *string

---

##### `DirectPathNoLog`<sup>Required</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```go
func DirectPathNoLog() interface{}
```

- *Type:* interface{}

---

##### `DirectPathParallelLoad`<sup>Required</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```go
func DirectPathParallelLoad() interface{}
```

- *Type:* interface{}

---

##### `EnableHomogenousTablespace`<sup>Required</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```go
func EnableHomogenousTablespace() interface{}
```

- *Type:* interface{}

---

##### `ExtraArchivedLogDestIds`<sup>Required</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```go
func ExtraArchivedLogDestIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```go
func FailTasksOnLobTruncation() interface{}
```

- *Type:* interface{}

---

##### `NumberDatatypeScale`<sup>Required</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```go
func NumberDatatypeScale() *f64
```

- *Type:* *f64

---

##### `OraclePathPrefix`<sup>Required</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```go
func OraclePathPrefix() *string
```

- *Type:* *string

---

##### `ParallelAsmReadThreads`<sup>Required</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```go
func ParallelAsmReadThreads() *f64
```

- *Type:* *f64

---

##### `ReadAheadBlocks`<sup>Required</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```go
func ReadAheadBlocks() *f64
```

- *Type:* *f64

---

##### `ReadTableSpaceName`<sup>Required</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```go
func ReadTableSpaceName() interface{}
```

- *Type:* interface{}

---

##### `ReplacePathPrefix`<sup>Required</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```go
func ReplacePathPrefix() interface{}
```

- *Type:* interface{}

---

##### `RetryInterval`<sup>Required</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```go
func RetryInterval() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
func SecretsManagerOracleAsmAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```go
func SecretsManagerOracleAsmSecretId() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SecurityDbEncryption`<sup>Required</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```go
func SecurityDbEncryption() *string
```

- *Type:* *string

---

##### `SecurityDbEncryptionName`<sup>Required</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```go
func SecurityDbEncryptionName() *string
```

- *Type:* *string

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```go
func SpatialDataOptionToGeoJsonFunctionName() *string
```

- *Type:* *string

---

##### `StandbyDelayTime`<sup>Required</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```go
func StandbyDelayTime() *f64
```

- *Type:* *f64

---

##### `UseAlternateFolderForOnline`<sup>Required</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```go
func UseAlternateFolderForOnline() interface{}
```

- *Type:* interface{}

---

##### `UseBFile`<sup>Required</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```go
func UseBFile() interface{}
```

- *Type:* interface{}

---

##### `UseDirectPathFullLoad`<sup>Required</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```go
func UseDirectPathFullLoad() interface{}
```

- *Type:* interface{}

---

##### `UseLogminerReader`<sup>Required</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```go
func UseLogminerReader() interface{}
```

- *Type:* interface{}

---

##### `UsePathPrefix`<sup>Required</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```go
func UsePathPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointPostgreSqlSettingsOutputReference <a name="DmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointPostgreSqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointPostgreSqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript"></a>

```go
func ResetAfterConnectScript()
```

##### `ResetBabelfishDatabaseName` <a name="ResetBabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName"></a>

```go
func ResetBabelfishDatabaseName()
```

##### `ResetCaptureDdls` <a name="ResetCaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls"></a>

```go
func ResetCaptureDdls()
```

##### `ResetDatabaseMode` <a name="ResetDatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode"></a>

```go
func ResetDatabaseMode()
```

##### `ResetDdlArtifactsSchema` <a name="ResetDdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema"></a>

```go
func ResetDdlArtifactsSchema()
```

##### `ResetExecuteTimeout` <a name="ResetExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout"></a>

```go
func ResetExecuteTimeout()
```

##### `ResetFailTasksOnLobTruncation` <a name="ResetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```go
func ResetFailTasksOnLobTruncation()
```

##### `ResetHeartbeatEnable` <a name="ResetHeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable"></a>

```go
func ResetHeartbeatEnable()
```

##### `ResetHeartbeatFrequency` <a name="ResetHeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency"></a>

```go
func ResetHeartbeatFrequency()
```

##### `ResetHeartbeatSchema` <a name="ResetHeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema"></a>

```go
func ResetHeartbeatSchema()
```

##### `ResetMapBooleanAsBoolean` <a name="ResetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```go
func ResetMapBooleanAsBoolean()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetSlotName` <a name="ResetSlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName"></a>

```go
func ResetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput">BabelfishDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput">CaptureDdlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput">DatabaseModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput">DdlArtifactsSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput">ExecuteTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput">FailTasksOnLobTruncationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput">HeartbeatEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput">HeartbeatFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput">HeartbeatSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput">MapBooleanAsBooleanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput">SlotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName">SlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```go
func AfterConnectScriptInput() *string
```

- *Type:* *string

---

##### `BabelfishDatabaseNameInput`<sup>Optional</sup> <a name="BabelfishDatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```go
func BabelfishDatabaseNameInput() *string
```

- *Type:* *string

---

##### `CaptureDdlsInput`<sup>Optional</sup> <a name="CaptureDdlsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput"></a>

```go
func CaptureDdlsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseModeInput`<sup>Optional</sup> <a name="DatabaseModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput"></a>

```go
func DatabaseModeInput() *string
```

- *Type:* *string

---

##### `DdlArtifactsSchemaInput`<sup>Optional</sup> <a name="DdlArtifactsSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```go
func DdlArtifactsSchemaInput() *string
```

- *Type:* *string

---

##### `ExecuteTimeoutInput`<sup>Optional</sup> <a name="ExecuteTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput"></a>

```go
func ExecuteTimeoutInput() *f64
```

- *Type:* *f64

---

##### `FailTasksOnLobTruncationInput`<sup>Optional</sup> <a name="FailTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```go
func FailTasksOnLobTruncationInput() interface{}
```

- *Type:* interface{}

---

##### `HeartbeatEnableInput`<sup>Optional</sup> <a name="HeartbeatEnableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput"></a>

```go
func HeartbeatEnableInput() interface{}
```

- *Type:* interface{}

---

##### `HeartbeatFrequencyInput`<sup>Optional</sup> <a name="HeartbeatFrequencyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```go
func HeartbeatFrequencyInput() *f64
```

- *Type:* *f64

---

##### `HeartbeatSchemaInput`<sup>Optional</sup> <a name="HeartbeatSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput"></a>

```go
func HeartbeatSchemaInput() *string
```

- *Type:* *string

---

##### `MapBooleanAsBooleanInput`<sup>Optional</sup> <a name="MapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```go
func MapBooleanAsBooleanInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput"></a>

```go
func SlotNameInput() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```go
func BabelfishDatabaseName() *string
```

- *Type:* *string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```go
func CaptureDdls() interface{}
```

- *Type:* interface{}

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```go
func DatabaseMode() *string
```

- *Type:* *string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```go
func DdlArtifactsSchema() *string
```

- *Type:* *string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```go
func ExecuteTimeout() *f64
```

- *Type:* *f64

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```go
func FailTasksOnLobTruncation() interface{}
```

- *Type:* interface{}

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```go
func HeartbeatEnable() interface{}
```

- *Type:* interface{}

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```go
func HeartbeatFrequency() *f64
```

- *Type:* *f64

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```go
func HeartbeatSchema() *string
```

- *Type:* *string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```go
func MapBooleanAsBoolean() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```go
func SlotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointRedisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointRedisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```go
func ResetAuthPassword()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetAuthUserName` <a name="ResetAuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```go
func ResetAuthUserName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```go
func ResetSslCaCertificateArn()
```

##### `ResetSslSecurityProtocol` <a name="ResetSslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```go
func ResetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">AuthUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">SslSecurityProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```go
func AuthPasswordInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthUserNameInput`<sup>Optional</sup> <a name="AuthUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```go
func AuthUserNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```go
func SslCaCertificateArnInput() *string
```

- *Type:* *string

---

##### `SslSecurityProtocolInput`<sup>Optional</sup> <a name="SslSecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```go
func SslSecurityProtocolInput() *string
```

- *Type:* *string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```go
func AuthPassword() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```go
func AuthUserName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```go
func SslSecurityProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointRedshiftSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointRedshiftSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptAnyDate` <a name="ResetAcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate"></a>

```go
func ResetAcceptAnyDate()
```

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript"></a>

```go
func ResetAfterConnectScript()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```go
func ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames"></a>

```go
func ResetCaseSensitiveNames()
```

##### `ResetCompUpdate` <a name="ResetCompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate"></a>

```go
func ResetCompUpdate()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout"></a>

```go
func ResetConnectionTimeout()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEmptyAsNull` <a name="ResetEmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull"></a>

```go
func ResetEmptyAsNull()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```go
func ResetEncryptionMode()
```

##### `ResetExplicitIds` <a name="ResetExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds"></a>

```go
func ResetExplicitIds()
```

##### `ResetFileTransferUploadStreams` <a name="ResetFileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams"></a>

```go
func ResetFileTransferUploadStreams()
```

##### `ResetLoadTimeout` <a name="ResetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout"></a>

```go
func ResetLoadTimeout()
```

##### `ResetMapBooleanAsBoolean` <a name="ResetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```go
func ResetMapBooleanAsBoolean()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetRemoveQuotes` <a name="ResetRemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes"></a>

```go
func ResetRemoveQuotes()
```

##### `ResetReplaceChars` <a name="ResetReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars"></a>

```go
func ResetReplaceChars()
```

##### `ResetReplaceInvalidChars` <a name="ResetReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars"></a>

```go
func ResetReplaceInvalidChars()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```go
func ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTrimBlanks` <a name="ResetTrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks"></a>

```go
func ResetTrimBlanks()
```

##### `ResetTruncateColumns` <a name="ResetTruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns"></a>

```go
func ResetTruncateColumns()
```

##### `ResetWriteBufferSize` <a name="ResetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize"></a>

```go
func ResetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput">AcceptAnyDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput">CompUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput">EmptyAsNullInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput">ExplicitIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput">FileTransferUploadStreamsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput">LoadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput">MapBooleanAsBooleanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput">RemoveQuotesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput">ReplaceCharsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput">ReplaceInvalidCharsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput">TrimBlanksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput">TruncateColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput">WriteBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate">CompUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">EmptyAsNull</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds">ExplicitIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">RemoveQuotes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars">ReplaceChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">TrimBlanks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">TruncateColumns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptAnyDateInput`<sup>Optional</sup> <a name="AcceptAnyDateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput"></a>

```go
func AcceptAnyDateInput() interface{}
```

- *Type:* interface{}

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput"></a>

```go
func AfterConnectScriptInput() *string
```

- *Type:* *string

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```go
func BucketFolderInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput"></a>

```go
func CaseSensitiveNamesInput() interface{}
```

- *Type:* interface{}

---

##### `CompUpdateInput`<sup>Optional</sup> <a name="CompUpdateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput"></a>

```go
func CompUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput"></a>

```go
func ConnectionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EmptyAsNullInput`<sup>Optional</sup> <a name="EmptyAsNullInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput"></a>

```go
func EmptyAsNullInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```go
func EncryptionModeInput() *string
```

- *Type:* *string

---

##### `ExplicitIdsInput`<sup>Optional</sup> <a name="ExplicitIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput"></a>

```go
func ExplicitIdsInput() interface{}
```

- *Type:* interface{}

---

##### `FileTransferUploadStreamsInput`<sup>Optional</sup> <a name="FileTransferUploadStreamsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput"></a>

```go
func FileTransferUploadStreamsInput() *f64
```

- *Type:* *f64

---

##### `LoadTimeoutInput`<sup>Optional</sup> <a name="LoadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput"></a>

```go
func LoadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MapBooleanAsBooleanInput`<sup>Optional</sup> <a name="MapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```go
func MapBooleanAsBooleanInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `RemoveQuotesInput`<sup>Optional</sup> <a name="RemoveQuotesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput"></a>

```go
func RemoveQuotesInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceCharsInput`<sup>Optional</sup> <a name="ReplaceCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput"></a>

```go
func ReplaceCharsInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharsInput`<sup>Optional</sup> <a name="ReplaceInvalidCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput"></a>

```go
func ReplaceInvalidCharsInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```go
func ServerSideEncryptionKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TrimBlanksInput`<sup>Optional</sup> <a name="TrimBlanksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput"></a>

```go
func TrimBlanksInput() interface{}
```

- *Type:* interface{}

---

##### `TruncateColumnsInput`<sup>Optional</sup> <a name="TruncateColumnsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput"></a>

```go
func TruncateColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `WriteBufferSizeInput`<sup>Optional</sup> <a name="WriteBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput"></a>

```go
func WriteBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `AcceptAnyDate`<sup>Required</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```go
func AcceptAnyDate() interface{}
```

- *Type:* interface{}

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```go
func CaseSensitiveNames() interface{}
```

- *Type:* interface{}

---

##### `CompUpdate`<sup>Required</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```go
func CompUpdate() interface{}
```

- *Type:* interface{}

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```go
func ConnectionTimeout() *f64
```

- *Type:* *f64

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyAsNull`<sup>Required</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```go
func EmptyAsNull() interface{}
```

- *Type:* interface{}

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ExplicitIds`<sup>Required</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```go
func ExplicitIds() interface{}
```

- *Type:* interface{}

---

##### `FileTransferUploadStreams`<sup>Required</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```go
func FileTransferUploadStreams() *f64
```

- *Type:* *f64

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```go
func LoadTimeout() *f64
```

- *Type:* *f64

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```go
func MapBooleanAsBoolean() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `RemoveQuotes`<sup>Required</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```go
func RemoveQuotes() interface{}
```

- *Type:* interface{}

---

##### `ReplaceChars`<sup>Required</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```go
func ReplaceChars() *string
```

- *Type:* *string

---

##### `ReplaceInvalidChars`<sup>Required</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```go
func ReplaceInvalidChars() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TrimBlanks`<sup>Required</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```go
func TrimBlanks() interface{}
```

- *Type:* interface{}

---

##### `TruncateColumns`<sup>Required</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```go
func TruncateColumns() interface{}
```

- *Type:* interface{}

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```go
func WriteBufferSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointS3SettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointS3SettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddColumnName` <a name="ResetAddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```go
func ResetAddColumnName()
```

##### `ResetAddTrailingPaddingCharacter` <a name="ResetAddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter"></a>

```go
func ResetAddTrailingPaddingCharacter()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```go
func ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetCannedAclForObjects` <a name="ResetCannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```go
func ResetCannedAclForObjects()
```

##### `ResetCdcInsertsAndUpdates` <a name="ResetCdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```go
func ResetCdcInsertsAndUpdates()
```

##### `ResetCdcInsertsOnly` <a name="ResetCdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```go
func ResetCdcInsertsOnly()
```

##### `ResetCdcMaxBatchInterval` <a name="ResetCdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```go
func ResetCdcMaxBatchInterval()
```

##### `ResetCdcMinFileSize` <a name="ResetCdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```go
func ResetCdcMinFileSize()
```

##### `ResetCdcPath` <a name="ResetCdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```go
func ResetCdcPath()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetCsvDelimiter` <a name="ResetCsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```go
func ResetCsvDelimiter()
```

##### `ResetCsvNoSupValue` <a name="ResetCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```go
func ResetCsvNoSupValue()
```

##### `ResetCsvNullValue` <a name="ResetCsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```go
func ResetCsvNullValue()
```

##### `ResetCsvRowDelimiter` <a name="ResetCsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```go
func ResetCsvRowDelimiter()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetDataPageSize` <a name="ResetDataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```go
func ResetDataPageSize()
```

##### `ResetDatePartitionDelimiter` <a name="ResetDatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```go
func ResetDatePartitionDelimiter()
```

##### `ResetDatePartitionEnabled` <a name="ResetDatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```go
func ResetDatePartitionEnabled()
```

##### `ResetDatePartitionSequence` <a name="ResetDatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```go
func ResetDatePartitionSequence()
```

##### `ResetDatePartitionTimezone` <a name="ResetDatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone"></a>

```go
func ResetDatePartitionTimezone()
```

##### `ResetDictPageSizeLimit` <a name="ResetDictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```go
func ResetDictPageSizeLimit()
```

##### `ResetEnableStatistics` <a name="ResetEnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```go
func ResetEnableStatistics()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```go
func ResetEncodingType()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```go
func ResetEncryptionMode()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetExternalTableDefinition` <a name="ResetExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```go
func ResetExternalTableDefinition()
```

##### `ResetGlueCatalogGeneration` <a name="ResetGlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration"></a>

```go
func ResetGlueCatalogGeneration()
```

##### `ResetIgnoreHeaderRows` <a name="ResetIgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```go
func ResetIgnoreHeaderRows()
```

##### `ResetIncludeOpForFullLoad` <a name="ResetIncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```go
func ResetIncludeOpForFullLoad()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetParquetTimestampInMillisecond` <a name="ResetParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```go
func ResetParquetTimestampInMillisecond()
```

##### `ResetParquetVersion` <a name="ResetParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```go
func ResetParquetVersion()
```

##### `ResetPreserveTransactions` <a name="ResetPreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```go
func ResetPreserveTransactions()
```

##### `ResetRfc4180` <a name="ResetRfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```go
func ResetRfc4180()
```

##### `ResetRowGroupLength` <a name="ResetRowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```go
func ResetRowGroupLength()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```go
func ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```go
func ResetServiceAccessRoleArn()
```

##### `ResetTimestampColumnName` <a name="ResetTimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```go
func ResetTimestampColumnName()
```

##### `ResetUseCsvNoSupValue` <a name="ResetUseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```go
func ResetUseCsvNoSupValue()
```

##### `ResetUseTaskStartTimeForFullLoadTimestamp` <a name="ResetUseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```go
func ResetUseTaskStartTimeForFullLoadTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">AddColumnNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput">AddTrailingPaddingCharacterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">CannedAclForObjectsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">CdcInsertsAndUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">CdcInsertsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">CdcMaxBatchIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">CdcMinFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">CdcPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">CsvDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">CsvNoSupValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">CsvNullValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">CsvRowDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">DataPageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">DatePartitionDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">DatePartitionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">DatePartitionSequenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput">DatePartitionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">DictPageSizeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">EnableStatisticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">ExternalTableDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput">GlueCatalogGenerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">IgnoreHeaderRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">IncludeOpForFullLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">ParquetTimestampInMillisecondInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">ParquetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">PreserveTransactionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">Rfc4180Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">RowGroupLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">TimestampColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">UseCsvNoSupValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">UseTaskStartTimeForFullLoadTimestampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddColumnNameInput`<sup>Optional</sup> <a name="AddColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```go
func AddColumnNameInput() interface{}
```

- *Type:* interface{}

---

##### `AddTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="AddTrailingPaddingCharacterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput"></a>

```go
func AddTrailingPaddingCharacterInput() interface{}
```

- *Type:* interface{}

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```go
func BucketFolderInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CannedAclForObjectsInput`<sup>Optional</sup> <a name="CannedAclForObjectsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```go
func CannedAclForObjectsInput() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="CdcInsertsAndUpdatesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```go
func CdcInsertsAndUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `CdcInsertsOnlyInput`<sup>Optional</sup> <a name="CdcInsertsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```go
func CdcInsertsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="CdcMaxBatchIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```go
func CdcMaxBatchIntervalInput() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSizeInput`<sup>Optional</sup> <a name="CdcMinFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```go
func CdcMinFileSizeInput() *f64
```

- *Type:* *f64

---

##### `CdcPathInput`<sup>Optional</sup> <a name="CdcPathInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```go
func CdcPathInput() *string
```

- *Type:* *string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `CsvDelimiterInput`<sup>Optional</sup> <a name="CsvDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```go
func CsvDelimiterInput() *string
```

- *Type:* *string

---

##### `CsvNoSupValueInput`<sup>Optional</sup> <a name="CsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```go
func CsvNoSupValueInput() *string
```

- *Type:* *string

---

##### `CsvNullValueInput`<sup>Optional</sup> <a name="CsvNullValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```go
func CsvNullValueInput() *string
```

- *Type:* *string

---

##### `CsvRowDelimiterInput`<sup>Optional</sup> <a name="CsvRowDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```go
func CsvRowDelimiterInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `DataPageSizeInput`<sup>Optional</sup> <a name="DataPageSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```go
func DataPageSizeInput() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiterInput`<sup>Optional</sup> <a name="DatePartitionDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```go
func DatePartitionDelimiterInput() *string
```

- *Type:* *string

---

##### `DatePartitionEnabledInput`<sup>Optional</sup> <a name="DatePartitionEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```go
func DatePartitionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DatePartitionSequenceInput`<sup>Optional</sup> <a name="DatePartitionSequenceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```go
func DatePartitionSequenceInput() *string
```

- *Type:* *string

---

##### `DatePartitionTimezoneInput`<sup>Optional</sup> <a name="DatePartitionTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput"></a>

```go
func DatePartitionTimezoneInput() *string
```

- *Type:* *string

---

##### `DictPageSizeLimitInput`<sup>Optional</sup> <a name="DictPageSizeLimitInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```go
func DictPageSizeLimitInput() *f64
```

- *Type:* *f64

---

##### `EnableStatisticsInput`<sup>Optional</sup> <a name="EnableStatisticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```go
func EnableStatisticsInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```go
func EncodingTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```go
func EncryptionModeInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `ExternalTableDefinitionInput`<sup>Optional</sup> <a name="ExternalTableDefinitionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```go
func ExternalTableDefinitionInput() *string
```

- *Type:* *string

---

##### `GlueCatalogGenerationInput`<sup>Optional</sup> <a name="GlueCatalogGenerationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput"></a>

```go
func GlueCatalogGenerationInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreHeaderRowsInput`<sup>Optional</sup> <a name="IgnoreHeaderRowsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```go
func IgnoreHeaderRowsInput() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoadInput`<sup>Optional</sup> <a name="IncludeOpForFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```go
func IncludeOpForFullLoadInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="ParquetTimestampInMillisecondInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```go
func ParquetTimestampInMillisecondInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetVersionInput`<sup>Optional</sup> <a name="ParquetVersionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```go
func ParquetVersionInput() *string
```

- *Type:* *string

---

##### `PreserveTransactionsInput`<sup>Optional</sup> <a name="PreserveTransactionsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```go
func PreserveTransactionsInput() interface{}
```

- *Type:* interface{}

---

##### `Rfc4180Input`<sup>Optional</sup> <a name="Rfc4180Input" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```go
func Rfc4180Input() interface{}
```

- *Type:* interface{}

---

##### `RowGroupLengthInput`<sup>Optional</sup> <a name="RowGroupLengthInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```go
func RowGroupLengthInput() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```go
func ServerSideEncryptionKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `TimestampColumnNameInput`<sup>Optional</sup> <a name="TimestampColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```go
func TimestampColumnNameInput() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValueInput`<sup>Optional</sup> <a name="UseCsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```go
func UseCsvNoSupValueInput() interface{}
```

- *Type:* interface{}

---

##### `UseTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestampInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```go
func UseTaskStartTimeForFullLoadTimestampInput() interface{}
```

- *Type:* interface{}

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```go
func AddColumnName() interface{}
```

- *Type:* interface{}

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```go
func AddTrailingPaddingCharacter() interface{}
```

- *Type:* interface{}

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```go
func CannedAclForObjects() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```go
func CdcInsertsAndUpdates() interface{}
```

- *Type:* interface{}

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```go
func CdcInsertsOnly() interface{}
```

- *Type:* interface{}

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```go
func CdcMaxBatchInterval() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```go
func CdcMinFileSize() *f64
```

- *Type:* *f64

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```go
func CdcPath() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```go
func CsvDelimiter() *string
```

- *Type:* *string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```go
func CsvNoSupValue() *string
```

- *Type:* *string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```go
func CsvNullValue() *string
```

- *Type:* *string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```go
func CsvRowDelimiter() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```go
func DataPageSize() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```go
func DatePartitionDelimiter() *string
```

- *Type:* *string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```go
func DatePartitionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```go
func DatePartitionSequence() *string
```

- *Type:* *string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```go
func DatePartitionTimezone() *string
```

- *Type:* *string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```go
func DictPageSizeLimit() *f64
```

- *Type:* *f64

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```go
func EnableStatistics() interface{}
```

- *Type:* interface{}

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```go
func ExternalTableDefinition() *string
```

- *Type:* *string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```go
func GlueCatalogGeneration() interface{}
```

- *Type:* interface{}

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```go
func IgnoreHeaderRows() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```go
func IncludeOpForFullLoad() interface{}
```

- *Type:* interface{}

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```go
func ParquetTimestampInMillisecond() interface{}
```

- *Type:* interface{}

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```go
func ParquetVersion() *string
```

- *Type:* *string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```go
func PreserveTransactions() interface{}
```

- *Type:* interface{}

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```go
func Rfc4180() interface{}
```

- *Type:* interface{}

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```go
func RowGroupLength() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```go
func TimestampColumnName() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```go
func UseCsvNoSupValue() interface{}
```

- *Type:* interface{}

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
func UseTaskStartTimeForFullLoadTimestamp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointSybaseSettingsOutputReference <a name="DmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointSybaseSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsEndpointSybaseSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```go
func ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId"></a>

```go
func ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```go
func SecretsManagerAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```go
func SecretsManagerSecretIdInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointTagsList <a name="DmsEndpointTagsList" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get"></a>

```go
func Get(index *f64) DmsEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsEndpointTagsOutputReference <a name="DmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsendpoint"

dmsendpoint.NewDmsEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



