# `kafkaconnectConnector` Submodule <a name="`kafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.kafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectConnector <a name="KafkaconnectConnector" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnector(scope Construct, id *string, config KafkaconnectConnectorConfig) KafkaconnectConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster">PutKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication">PutKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit">PutKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery">PutLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins">PutPlugins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription">ResetConnectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery">ResetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity"></a>

```go
func PutCapacity(value KafkaconnectConnectorCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `PutKafkaCluster` <a name="PutKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster"></a>

```go
func PutKafkaCluster(value KafkaconnectConnectorKafkaCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `PutKafkaClusterClientAuthentication` <a name="PutKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication"></a>

```go
func PutKafkaClusterClientAuthentication(value KafkaconnectConnectorKafkaClusterClientAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `PutKafkaClusterEncryptionInTransit` <a name="PutKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```go
func PutKafkaClusterEncryptionInTransit(value KafkaconnectConnectorKafkaClusterEncryptionInTransit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `PutLogDelivery` <a name="PutLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery"></a>

```go
func PutLogDelivery(value KafkaconnectConnectorLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `PutPlugins` <a name="PutPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins"></a>

```go
func PutPlugins(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration"></a>

```go
func PutWorkerConfiguration(value KafkaconnectConnectorWorkerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `ResetConnectorDescription` <a name="ResetConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription"></a>

```go
func ResetConnectorDescription()
```

##### `ResetLogDelivery` <a name="ResetLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery"></a>

```go
func ResetLogDelivery()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration"></a>

```go
func ResetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.KafkaconnectConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.KafkaconnectConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.KafkaconnectConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.KafkaconnectConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KafkaconnectConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins">Plugins</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput">CapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput">ConnectorConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput">ConnectorDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput">ConnectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput">KafkaClusterClientAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput">KafkaClusterEncryptionInTransitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput">KafkaConnectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput">LogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput">PluginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription">ConnectorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion">KafkaConnectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity"></a>

```go
func Capacity() KafkaconnectConnectorCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a>

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster"></a>

```go
func KafkaCluster() KafkaconnectConnectorKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```go
func KafkaClusterClientAuthentication() KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```go
func KafkaClusterEncryptionInTransit() KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery"></a>

```go
func LogDelivery() KafkaconnectConnectorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `Plugins`<sup>Required</sup> <a name="Plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins"></a>

```go
func Plugins() KafkaconnectConnectorPluginsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags"></a>

```go
func Tags() KafkaconnectConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a>

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration"></a>

```go
func WorkerConfiguration() KafkaconnectConnectorWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput"></a>

```go
func CapacityInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectorConfigurationInput`<sup>Optional</sup> <a name="ConnectorConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput"></a>

```go
func ConnectorConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectorDescriptionInput`<sup>Optional</sup> <a name="ConnectorDescriptionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput"></a>

```go
func ConnectorDescriptionInput() *string
```

- *Type:* *string

---

##### `ConnectorNameInput`<sup>Optional</sup> <a name="ConnectorNameInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput"></a>

```go
func ConnectorNameInput() *string
```

- *Type:* *string

---

##### `KafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="KafkaClusterClientAuthenticationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```go
func KafkaClusterClientAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="KafkaClusterEncryptionInTransitInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```go
func KafkaClusterEncryptionInTransitInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput"></a>

```go
func KafkaClusterInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaConnectVersionInput`<sup>Optional</sup> <a name="KafkaConnectVersionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput"></a>

```go
func KafkaConnectVersionInput() *string
```

- *Type:* *string

---

##### `LogDeliveryInput`<sup>Optional</sup> <a name="LogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput"></a>

```go
func LogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `PluginsInput`<sup>Optional</sup> <a name="PluginsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput"></a>

```go
func PluginsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput"></a>

```go
func WorkerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration"></a>

```go
func ConnectorConfiguration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectorDescription`<sup>Required</sup> <a name="ConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription"></a>

```go
func ConnectorDescription() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `KafkaConnectVersion`<sup>Required</sup> <a name="KafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion"></a>

```go
func KafkaConnectVersion() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorCapacity <a name="KafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorCapacity {
	AutoScaling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling,
	ProvisionedCapacity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | Details about auto scaling of a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | Details about a fixed capacity allocated to a connector. |

---

##### `AutoScaling`<sup>Optional</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling"></a>

```go
AutoScaling KafkaconnectConnectorCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

##### `ProvisionedCapacity`<sup>Optional</sup> <a name="ProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity"></a>

```go
ProvisionedCapacity KafkaconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

### KafkaconnectConnectorCapacityAutoScaling <a name="KafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorCapacityAutoScaling {
	MaxAutoscalingTaskCount: *f64,
	MaxWorkerCount: *f64,
	McuCount: *f64,
	MinWorkerCount: *f64,
	ScaleInPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy,
	ScaleOutPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount">MaxAutoscalingTaskCount</a></code> | <code>*f64</code> | The maximum number of tasks allocated to the connector during autoscaling operations. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>*f64</code> | The maximum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount">McuCount</a></code> | <code>*f64</code> | Specifies how many MSK Connect Units (MCU) as the minimum scaling unit. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount">MinWorkerCount</a></code> | <code>*f64</code> | The minimum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | Information about the scale in policy of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | Information about the scale out policy of the connector. |

---

##### `MaxAutoscalingTaskCount`<sup>Optional</sup> <a name="MaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount"></a>

```go
MaxAutoscalingTaskCount *f64
```

- *Type:* *f64

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

##### `MaxWorkerCount`<sup>Optional</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount"></a>

```go
MaxWorkerCount *f64
```

- *Type:* *f64

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount"></a>

```go
McuCount *f64
```

- *Type:* *f64

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `MinWorkerCount`<sup>Optional</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount"></a>

```go
MinWorkerCount *f64
```

- *Type:* *f64

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy"></a>

```go
ScaleInPolicy KafkaconnectConnectorCapacityAutoScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

##### `ScaleOutPolicy`<sup>Optional</sup> <a name="ScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy"></a>

```go
ScaleOutPolicy KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

### KafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy {
	CpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | Specifies the CPU utilization percentage threshold at which connector scale in should trigger. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```go
CpuUtilizationPercentage *f64
```

- *Type:* *f64

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy {
	CpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | Specifies the CPU utilization percentage threshold at which connector scale out should trigger. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```go
CpuUtilizationPercentage *f64
```

- *Type:* *f64

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityProvisionedCapacity <a name="KafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorCapacityProvisionedCapacity {
	McuCount: *f64,
	WorkerCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount">McuCount</a></code> | <code>*f64</code> | Specifies how many MSK Connect Units (MCU) are allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | Number of workers for a connector. |

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```go
McuCount *f64
```

- *Type:* *f64

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `WorkerCount`<sup>Optional</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```go
WorkerCount *f64
```

- *Type:* *f64

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

### KafkaconnectConnectorConfig <a name="KafkaconnectConnectorConfig" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity,
	ConnectorConfiguration: *map[string]*string,
	ConnectorName: *string,
	KafkaCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster,
	KafkaClusterClientAuthentication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication,
	KafkaClusterEncryptionInTransit: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit,
	KafkaConnectVersion: *string,
	Plugins: interface{},
	ServiceExecutionRoleArn: *string,
	ConnectorDescription: *string,
	LogDelivery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery,
	NetworkType: *string,
	Tags: interface{},
	WorkerConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>*map[string]*string</code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName">ConnectorName</a></code> | <code>*string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion">KafkaConnectVersion</a></code> | <code>*string</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins">Plugins</a></code> | <code>interface{}</code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription">ConnectorDescription</a></code> | <code>*string</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity"></a>

```go
Capacity KafkaconnectConnectorCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration"></a>

```go
ConnectorConfiguration *map[string]*string
```

- *Type:* *map[string]*string

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName"></a>

```go
ConnectorName *string
```

- *Type:* *string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster"></a>

```go
KafkaCluster KafkaconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```go
KafkaClusterClientAuthentication KafkaconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```go
KafkaClusterEncryptionInTransit KafkaconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `KafkaConnectVersion`<sup>Required</sup> <a name="KafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion"></a>

```go
KafkaConnectVersion *string
```

- *Type:* *string

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `Plugins`<sup>Required</sup> <a name="Plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins"></a>

```go
Plugins interface{}
```

- *Type:* interface{}

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `ConnectorDescription`<sup>Optional</sup> <a name="ConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription"></a>

```go
ConnectorDescription *string
```

- *Type:* *string

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `LogDelivery`<sup>Optional</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery"></a>

```go
LogDelivery KafkaconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration"></a>

```go
WorkerConfiguration KafkaconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

### KafkaconnectConnectorKafkaCluster <a name="KafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorKafkaCluster {
	ApacheKafkaCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | Details of how to connect to an Apache Kafka cluster. |

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```go
ApacheKafkaCluster KafkaconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="KafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster {
	BootstrapServers: *string,
	Vpc: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | The bootstrap servers string of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | Information about a VPC used with the connector. |

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```go
BootstrapServers *string
```

- *Type:* *string

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```go
Vpc KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---

### KafkaconnectConnectorKafkaClusterClientAuthentication <a name="KafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorKafkaClusterClientAuthentication {
	AuthenticationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | The type of client authentication used to connect to the Kafka cluster. |

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

### KafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit {
	EncryptionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The type of encryption in transit to the Kafka cluster. |

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

### KafkaconnectConnectorLogDelivery <a name="KafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorLogDelivery {
	WorkerLogDelivery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | Specifies where worker logs are delivered. |

---

##### `WorkerLogDelivery`<sup>Optional</sup> <a name="WorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```go
WorkerLogDelivery KafkaconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="KafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery {
	CloudwatchLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs,
	Firehose: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose,
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | Details about delivering logs to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | Details about delivering logs to Amazon Kinesis Data Firehose. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | Details about delivering logs to Amazon S3. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```go
CloudwatchLogs KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```go
Firehose KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```go
S3 KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
	Enabled: interface{},
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the logs get sent to the specified CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
	DeliveryStream: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | The Kinesis Data Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
	Bucket: *string,
	Enabled: interface{},
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the logs get sent to the specified Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">Prefix</a></code> | <code>*string</code> | The S3 prefix that is the destination for log delivery. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

### KafkaconnectConnectorPlugins <a name="KafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorPlugins {
	CustomPlugin: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | Details about a custom plugin. |

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin"></a>

```go
CustomPlugin KafkaconnectConnectorPluginsCustomPlugin
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

Details about a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#custom_plugin KafkaconnectConnector#custom_plugin}

---

### KafkaconnectConnectorPluginsCustomPlugin <a name="KafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorPluginsCustomPlugin {
	CustomPluginArn: *string,
	Revision: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn">CustomPluginArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the custom plugin to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision">Revision</a></code> | <code>*f64</code> | The revision of the custom plugin to use. |

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn"></a>

```go
CustomPluginArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

### KafkaconnectConnectorTags <a name="KafkaconnectConnectorTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}.

---

### KafkaconnectConnectorWorkerConfiguration <a name="KafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

&kafkaconnectconnector.KafkaconnectConnectorWorkerConfiguration {
	Revision: *f64,
	WorkerConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision">Revision</a></code> | <code>*f64</code> | The revision of the worker configuration to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn">WorkerConfigurationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the worker configuration to use. |

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

##### `WorkerConfigurationArn`<sup>Optional</sup> <a name="WorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn"></a>

```go
WorkerConfigurationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectConnectorCapacityAutoScalingOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorCapacityAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorCapacityAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy">PutScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount">ResetMaxAutoscalingTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount">ResetMaxWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount">ResetMinWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy">ResetScaleOutPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy"></a>

```go
func PutScaleInPolicy(value KafkaconnectConnectorCapacityAutoScalingScaleInPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `PutScaleOutPolicy` <a name="PutScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy"></a>

```go
func PutScaleOutPolicy(value KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `ResetMaxAutoscalingTaskCount` <a name="ResetMaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount"></a>

```go
func ResetMaxAutoscalingTaskCount()
```

##### `ResetMaxWorkerCount` <a name="ResetMaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount"></a>

```go
func ResetMaxWorkerCount()
```

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount"></a>

```go
func ResetMcuCount()
```

##### `ResetMinWorkerCount` <a name="ResetMinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount"></a>

```go
func ResetMinWorkerCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy"></a>

```go
func ResetScaleInPolicy()
```

##### `ResetScaleOutPolicy` <a name="ResetScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy"></a>

```go
func ResetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput">MaxAutoscalingTaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput">MaxWorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput">MinWorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput">ScaleOutPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">MaxAutoscalingTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">McuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">MinWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```go
func ScaleInPolicy() KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `ScaleOutPolicy`<sup>Required</sup> <a name="ScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```go
func ScaleOutPolicy() KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `MaxAutoscalingTaskCountInput`<sup>Optional</sup> <a name="MaxAutoscalingTaskCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput"></a>

```go
func MaxAutoscalingTaskCountInput() *f64
```

- *Type:* *f64

---

##### `MaxWorkerCountInput`<sup>Optional</sup> <a name="MaxWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput"></a>

```go
func MaxWorkerCountInput() *f64
```

- *Type:* *f64

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput"></a>

```go
func McuCountInput() *f64
```

- *Type:* *f64

---

##### `MinWorkerCountInput`<sup>Optional</sup> <a name="MinWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput"></a>

```go
func MinWorkerCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput"></a>

```go
func ScaleInPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleOutPolicyInput`<sup>Optional</sup> <a name="ScaleOutPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput"></a>

```go
func ScaleOutPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAutoscalingTaskCount`<sup>Required</sup> <a name="MaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```go
func MaxAutoscalingTaskCount() *f64
```

- *Type:* *f64

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```go
func MaxWorkerCount() *f64
```

- *Type:* *f64

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```go
func McuCount() *f64
```

- *Type:* *f64

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```go
func MinWorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```go
func ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```go
func CpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```go
func CpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```go
func ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```go
func CpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```go
func CpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorCapacityOutputReference <a name="KafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling">PutAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity">PutProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling">ResetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity">ResetProvisionedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling"></a>

```go
func PutAutoScaling(value KafkaconnectConnectorCapacityAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `PutProvisionedCapacity` <a name="PutProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```go
func PutProvisionedCapacity(value KafkaconnectConnectorCapacityProvisionedCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `ResetAutoScaling` <a name="ResetAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling"></a>

```go
func ResetAutoScaling()
```

##### `ResetProvisionedCapacity` <a name="ResetProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```go
func ResetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput">AutoScalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">ProvisionedCapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```go
func AutoScaling() KafkaconnectConnectorCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `ProvisionedCapacity`<sup>Required</sup> <a name="ProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```go
func ProvisionedCapacity() KafkaconnectConnectorCapacityProvisionedCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput"></a>

```go
func AutoScalingInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedCapacityInput`<sup>Optional</sup> <a name="ProvisionedCapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```go
func ProvisionedCapacityInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="KafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorCapacityProvisionedCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorCapacityProvisionedCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount">ResetWorkerCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```go
func ResetMcuCount()
```

##### `ResetWorkerCount` <a name="ResetWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount"></a>

```go
func ResetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">McuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```go
func McuCountInput() *f64
```

- *Type:* *f64

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```go
func WorkerCountInput() *f64
```

- *Type:* *f64

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```go
func McuCount() *f64
```

- *Type:* *f64

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">PutVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```go
func PutVpc(value KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">VpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```go
func Vpc() KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```go
func BootstrapServersInput() *string
```

- *Type:* *string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```go
func VpcInput() interface{}
```

- *Type:* interface{}

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```go
func BootstrapServers() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">PutApacheKafkaCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApacheKafkaCluster` <a name="PutApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```go
func PutApacheKafkaCluster(value KafkaconnectConnectorKafkaClusterApacheKafkaCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">ApacheKafkaClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```go
func ApacheKafkaCluster() KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `ApacheKafkaClusterInput`<sup>Optional</sup> <a name="ApacheKafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```go
func ApacheKafkaClusterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">PutWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery">ResetWorkerLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerLogDelivery` <a name="PutWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```go
func PutWorkerLogDelivery(value KafkaconnectConnectorLogDeliveryWorkerLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `ResetWorkerLogDelivery` <a name="ResetWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery"></a>

```go
func ResetWorkerLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">WorkerLogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```go
func WorkerLogDelivery() KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `WorkerLogDeliveryInput`<sup>Optional</sup> <a name="WorkerLogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```go
func WorkerLogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```go
func PutFirehose(value KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```go
func PutS3(value KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```go
func Firehose() KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```go
func S3() KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() interface{}
```

- *Type:* interface{}

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorPluginsCustomPluginOutputReference <a name="KafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorPluginsCustomPluginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorPluginsCustomPluginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput">CustomPluginArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">CustomPluginArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPluginArnInput`<sup>Optional</sup> <a name="CustomPluginArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput"></a>

```go
func CustomPluginArnInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```go
func CustomPluginArn() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorPluginsList <a name="KafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorPluginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KafkaconnectConnectorPluginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get"></a>

```go
func Get(index *f64) KafkaconnectConnectorPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorPluginsOutputReference <a name="KafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorPluginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KafkaconnectConnectorPluginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin">PutCustomPlugin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPlugin` <a name="PutCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin"></a>

```go
func PutCustomPlugin(value KafkaconnectConnectorPluginsCustomPlugin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput">CustomPluginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```go
func CustomPlugin() KafkaconnectConnectorPluginsCustomPluginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `CustomPluginInput`<sup>Optional</sup> <a name="CustomPluginInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput"></a>

```go
func CustomPluginInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorTagsList <a name="KafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KafkaconnectConnectorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get"></a>

```go
func Get(index *f64) KafkaconnectConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorTagsOutputReference <a name="KafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KafkaconnectConnectorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectConnectorWorkerConfigurationOutputReference <a name="KafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectconnector"

kafkaconnectconnector.NewKafkaconnectConnectorWorkerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectConnectorWorkerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn">ResetWorkerConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetWorkerConfigurationArn` <a name="ResetWorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn"></a>

```go
func ResetWorkerConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput">WorkerConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">WorkerConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `WorkerConfigurationArnInput`<sup>Optional</sup> <a name="WorkerConfigurationArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput"></a>

```go
func WorkerConfigurationArnInput() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `WorkerConfigurationArn`<sup>Required</sup> <a name="WorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```go
func WorkerConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



