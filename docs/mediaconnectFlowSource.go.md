# `mediaconnectFlowSource` Submodule <a name="`mediaconnectFlowSource` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowSourceA <a name="MediaconnectFlowSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceA(scope Construct, id *string, config MediaconnectFlowSourceAConfig) MediaconnectFlowSourceA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig">MediaconnectFlowSourceAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig">MediaconnectFlowSourceAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption">PutDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource">PutGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption">ResetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn">ResetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource">ResetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort">ResetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate">ResetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency">ResetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency">ResetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort">ResetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress">ResetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress">ResetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId">ResetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr">ResetWhitelistCidr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDecryption` <a name="PutDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption"></a>

```go
func PutDecryption(value MediaconnectFlowSourceDecryptionA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `PutGatewayBridgeSource` <a name="PutGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource"></a>

```go
func PutGatewayBridgeSource(value MediaconnectFlowSourceGatewayBridgeSourceA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDecryption` <a name="ResetDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption"></a>

```go
func ResetDecryption()
```

##### `ResetEntitlementArn` <a name="ResetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn"></a>

```go
func ResetEntitlementArn()
```

##### `ResetGatewayBridgeSource` <a name="ResetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource"></a>

```go
func ResetGatewayBridgeSource()
```

##### `ResetIngestPort` <a name="ResetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort"></a>

```go
func ResetIngestPort()
```

##### `ResetMaxBitrate` <a name="ResetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate"></a>

```go
func ResetMaxBitrate()
```

##### `ResetMaxLatency` <a name="ResetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency"></a>

```go
func ResetMaxLatency()
```

##### `ResetMinLatency` <a name="ResetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency"></a>

```go
func ResetMinLatency()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSenderControlPort` <a name="ResetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort"></a>

```go
func ResetSenderControlPort()
```

##### `ResetSenderIpAddress` <a name="ResetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress"></a>

```go
func ResetSenderIpAddress()
```

##### `ResetSourceListenerAddress` <a name="ResetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress"></a>

```go
func ResetSourceListenerAddress()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort"></a>

```go
func ResetSourceListenerPort()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId"></a>

```go
func ResetStreamId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```

##### `ResetWhitelistCidr` <a name="ResetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr"></a>

```go
func ResetWhitelistCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.MediaconnectFlowSourceA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.MediaconnectFlowSourceA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.MediaconnectFlowSourceA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.MediaconnectFlowSourceA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectFlowSourceA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectFlowSourceA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowSourceA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp">IngestIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort">SourceIngestPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput">DecryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput">EntitlementArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput">FlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput">GatewayBridgeSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput">IngestPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput">MaxBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput">MaxLatencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput">MinLatencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput">SenderControlPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput">SenderIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput">SourceListenerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput">StreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput">WhitelistCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort">IngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency">MaxLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency">MinLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort">SenderControlPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress">SenderIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr">WhitelistCidr</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption"></a>

```go
func Decryption() MediaconnectFlowSourceDecryptionAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a>

---

##### `GatewayBridgeSource`<sup>Required</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource"></a>

```go
func GatewayBridgeSource() MediaconnectFlowSourceGatewayBridgeSourceAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngestIp`<sup>Required</sup> <a name="IngestIp" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp"></a>

```go
func IngestIp() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `SourceIngestPort`<sup>Required</sup> <a name="SourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort"></a>

```go
func SourceIngestPort() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags"></a>

```go
func Tags() MediaconnectFlowSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a>

---

##### `DecryptionInput`<sup>Optional</sup> <a name="DecryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput"></a>

```go
func DecryptionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntitlementArnInput`<sup>Optional</sup> <a name="EntitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput"></a>

```go
func EntitlementArnInput() *string
```

- *Type:* *string

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput"></a>

```go
func FlowArnInput() *string
```

- *Type:* *string

---

##### `GatewayBridgeSourceInput`<sup>Optional</sup> <a name="GatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput"></a>

```go
func GatewayBridgeSourceInput() interface{}
```

- *Type:* interface{}

---

##### `IngestPortInput`<sup>Optional</sup> <a name="IngestPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput"></a>

```go
func IngestPortInput() *f64
```

- *Type:* *f64

---

##### `MaxBitrateInput`<sup>Optional</sup> <a name="MaxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput"></a>

```go
func MaxBitrateInput() *f64
```

- *Type:* *f64

---

##### `MaxLatencyInput`<sup>Optional</sup> <a name="MaxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput"></a>

```go
func MaxLatencyInput() *f64
```

- *Type:* *f64

---

##### `MinLatencyInput`<sup>Optional</sup> <a name="MinLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput"></a>

```go
func MinLatencyInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SenderControlPortInput`<sup>Optional</sup> <a name="SenderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput"></a>

```go
func SenderControlPortInput() *f64
```

- *Type:* *f64

---

##### `SenderIpAddressInput`<sup>Optional</sup> <a name="SenderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput"></a>

```go
func SenderIpAddressInput() *string
```

- *Type:* *string

---

##### `SourceListenerAddressInput`<sup>Optional</sup> <a name="SourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput"></a>

```go
func SourceListenerAddressInput() *string
```

- *Type:* *string

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput"></a>

```go
func SourceListenerPortInput() *f64
```

- *Type:* *f64

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput"></a>

```go
func StreamIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `WhitelistCidrInput`<sup>Optional</sup> <a name="WhitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput"></a>

```go
func WhitelistCidrInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn"></a>

```go
func EntitlementArn() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `IngestPort`<sup>Required</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort"></a>

```go
func IngestPort() *f64
```

- *Type:* *f64

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate"></a>

```go
func MaxBitrate() *f64
```

- *Type:* *f64

---

##### `MaxLatency`<sup>Required</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency"></a>

```go
func MaxLatency() *f64
```

- *Type:* *f64

---

##### `MinLatency`<sup>Required</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency"></a>

```go
func MinLatency() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SenderControlPort`<sup>Required</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort"></a>

```go
func SenderControlPort() *f64
```

- *Type:* *f64

---

##### `SenderIpAddress`<sup>Required</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress"></a>

```go
func SenderIpAddress() *string
```

- *Type:* *string

---

##### `SourceListenerAddress`<sup>Required</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress"></a>

```go
func SourceListenerAddress() *string
```

- *Type:* *string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort"></a>

```go
func SourceListenerPort() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `WhitelistCidr`<sup>Required</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr"></a>

```go
func WhitelistCidr() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowSourceAConfig <a name="MediaconnectFlowSourceAConfig" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

&mediaconnectflowsource.MediaconnectFlowSourceAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	FlowArn: *string,
	Name: *string,
	Decryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA,
	EntitlementArn: *string,
	GatewayBridgeSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA,
	IngestPort: *f64,
	MaxBitrate: *f64,
	MaxLatency: *f64,
	MinLatency: *f64,
	Protocol: *string,
	SenderControlPort: *f64,
	SenderIpAddress: *string,
	SourceListenerAddress: *string,
	SourceListenerPort: *f64,
	StreamId: *string,
	Tags: interface{},
	VpcInterfaceName: *string,
	WhitelistCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description">Description</a></code> | <code>*string</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn">FlowArn</a></code> | <code>*string</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name">Name</a></code> | <code>*string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort">IngestPort</a></code> | <code>*f64</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency">MaxLatency</a></code> | <code>*f64</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency">MinLatency</a></code> | <code>*f64</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort">SenderControlPort</a></code> | <code>*f64</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress">SenderIpAddress</a></code> | <code>*string</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>*string</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId">StreamId</a></code> | <code>*string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr">WhitelistCidr</a></code> | <code>*string</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn"></a>

```go
FlowArn *string
```

- *Type:* *string

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `Decryption`<sup>Optional</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption"></a>

```go
Decryption MediaconnectFlowSourceDecryptionA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `EntitlementArn`<sup>Optional</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn"></a>

```go
EntitlementArn *string
```

- *Type:* *string

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `GatewayBridgeSource`<sup>Optional</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource"></a>

```go
GatewayBridgeSource MediaconnectFlowSourceGatewayBridgeSourceA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `IngestPort`<sup>Optional</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort"></a>

```go
IngestPort *f64
```

- *Type:* *f64

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `MaxBitrate`<sup>Optional</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate"></a>

```go
MaxBitrate *f64
```

- *Type:* *f64

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `MaxLatency`<sup>Optional</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency"></a>

```go
MaxLatency *f64
```

- *Type:* *f64

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `MinLatency`<sup>Optional</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency"></a>

```go
MinLatency *f64
```

- *Type:* *f64

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `SenderControlPort`<sup>Optional</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort"></a>

```go
SenderControlPort *f64
```

- *Type:* *f64

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `SenderIpAddress`<sup>Optional</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress"></a>

```go
SenderIpAddress *string
```

- *Type:* *string

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `SourceListenerAddress`<sup>Optional</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress"></a>

```go
SourceListenerAddress *string
```

- *Type:* *string

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort"></a>

```go
SourceListenerPort *f64
```

- *Type:* *f64

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId"></a>

```go
StreamId *string
```

- *Type:* *string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `WhitelistCidr`<sup>Optional</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr"></a>

```go
WhitelistCidr *string
```

- *Type:* *string

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

### MediaconnectFlowSourceDecryptionA <a name="MediaconnectFlowSourceDecryptionA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

&mediaconnectflowsource.MediaconnectFlowSourceDecryptionA {
	Algorithm: *string,
	ConstantInitializationVector: *string,
	DeviceId: *string,
	KeyType: *string,
	Region: *string,
	ResourceId: *string,
	RoleArn: *string,
	SecretArn: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm">Algorithm</a></code> | <code>*string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId">DeviceId</a></code> | <code>*string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType">KeyType</a></code> | <code>*string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region">Region</a></code> | <code>*string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId">ResourceId</a></code> | <code>*string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url">Url</a></code> | <code>*string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#algorithm MediaconnectFlowSourceA#algorithm}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector"></a>

```go
ConstantInitializationVector *string
```

- *Type:* *string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#device_id MediaconnectFlowSourceA#device_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#key_type MediaconnectFlowSourceA#key_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#region MediaconnectFlowSourceA#region}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#resource_id MediaconnectFlowSourceA#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#role_arn MediaconnectFlowSourceA#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#secret_arn MediaconnectFlowSourceA#secret_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#url MediaconnectFlowSourceA#url}

---

### MediaconnectFlowSourceGatewayBridgeSourceA <a name="MediaconnectFlowSourceGatewayBridgeSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

&mediaconnectflowsource.MediaconnectFlowSourceGatewayBridgeSourceA {
	BridgeArn: *string,
	VpcInterfaceAttachment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `BridgeArn`<sup>Optional</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn"></a>

```go
BridgeArn *string
```

- *Type:* *string

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#bridge_arn MediaconnectFlowSourceA#bridge_arn}

---

##### `VpcInterfaceAttachment`<sup>Optional</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment"></a>

```go
VpcInterfaceAttachment MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment MediaconnectFlowSourceA#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

&mediaconnectflowsource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA {
	VpcInterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

### MediaconnectFlowSourceTags <a name="MediaconnectFlowSourceTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

&mediaconnectflowsource.MediaconnectFlowSourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowSourceDecryptionAOutputReference <a name="MediaconnectFlowSourceDecryptionAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceDecryptionAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceDecryptionAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector"></a>

```go
func ResetConstantInitializationVector()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId"></a>

```go
func ResetDeviceId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput"></a>

```go
func ConstantInitializationVectorInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceGatewayBridgeSourceAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceGatewayBridgeSourceAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceGatewayBridgeSourceAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment">PutVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn">ResetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment">ResetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcInterfaceAttachment` <a name="PutVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment"></a>

```go
func PutVpcInterfaceAttachment(value MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `ResetBridgeArn` <a name="ResetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn"></a>

```go
func ResetBridgeArn()
```

##### `ResetVpcInterfaceAttachment` <a name="ResetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment"></a>

```go
func ResetVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput">BridgeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput">VpcInterfaceAttachmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceAttachment`<sup>Required</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment"></a>

```go
func VpcInterfaceAttachment() MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a>

---

##### `BridgeArnInput`<sup>Optional</sup> <a name="BridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput"></a>

```go
func BridgeArnInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="VpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput"></a>

```go
func VpcInterfaceAttachmentInput() interface{}
```

- *Type:* interface{}

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn"></a>

```go
func BridgeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceTagsList <a name="MediaconnectFlowSourceTagsList" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowSourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceTagsOutputReference <a name="MediaconnectFlowSourceTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowsource"

mediaconnectflowsource.NewMediaconnectFlowSourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowSourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



