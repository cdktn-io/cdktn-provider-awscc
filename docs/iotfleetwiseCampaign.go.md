# `iotfleetwiseCampaign` Submodule <a name="`iotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.iotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseCampaign <a name="IotfleetwiseCampaign" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaign(scope Construct, id *string, config IotfleetwiseCampaignConfig) IotfleetwiseCampaign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme">PutCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs">PutDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions">PutDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect">PutSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch">PutSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs">ResetDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions">ResetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions">ResetDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode">ResetDiagnosticsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime">ResetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration">ResetPostTriggerCollectionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect">ResetSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch">ResetSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode">ResetSpoolingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectionScheme` <a name="PutCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme"></a>

```go
func PutCollectionScheme(value IotfleetwiseCampaignCollectionScheme)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `PutDataDestinationConfigs` <a name="PutDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs"></a>

```go
func PutDataDestinationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataPartitions` <a name="PutDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions"></a>

```go
func PutDataPartitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSignalsToCollect` <a name="PutSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect"></a>

```go
func PutSignalsToCollect(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSignalsToFetch` <a name="PutSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch"></a>

```go
func PutSignalsToFetch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDataDestinationConfigs` <a name="ResetDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs"></a>

```go
func ResetDataDestinationConfigs()
```

##### `ResetDataExtraDimensions` <a name="ResetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions"></a>

```go
func ResetDataExtraDimensions()
```

##### `ResetDataPartitions` <a name="ResetDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions"></a>

```go
func ResetDataPartitions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiagnosticsMode` <a name="ResetDiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode"></a>

```go
func ResetDiagnosticsMode()
```

##### `ResetExpiryTime` <a name="ResetExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime"></a>

```go
func ResetExpiryTime()
```

##### `ResetPostTriggerCollectionDuration` <a name="ResetPostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration"></a>

```go
func ResetPostTriggerCollectionDuration()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSignalsToCollect` <a name="ResetSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect"></a>

```go
func ResetSignalsToCollect()
```

##### `ResetSignalsToFetch` <a name="ResetSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch"></a>

```go
func ResetSignalsToFetch()
```

##### `ResetSpoolingMode` <a name="ResetSpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode"></a>

```go
func ResetSpoolingMode()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.IotfleetwiseCampaign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.IotfleetwiseCampaign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.IotfleetwiseCampaign_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.IotfleetwiseCampaign_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotfleetwiseCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme">CollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs">DataDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions">DataPartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime">LastModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect">SignalsToCollect</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch">SignalsToFetch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput">CollectionSchemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput">DataDestinationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput">DataExtraDimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput">DataPartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput">DiagnosticsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput">ExpiryTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput">PostTriggerCollectionDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput">SignalCatalogArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput">SignalsToCollectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput">SignalsToFetchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput">SpoolingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput">TargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode">DiagnosticsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime">ExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration">PostTriggerCollectionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode">SpoolingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollectionScheme`<sup>Required</sup> <a name="CollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme"></a>

```go
func CollectionScheme() IotfleetwiseCampaignCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DataDestinationConfigs`<sup>Required</sup> <a name="DataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```go
func DataDestinationConfigs() IotfleetwiseCampaignDataDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `DataPartitions`<sup>Required</sup> <a name="DataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions"></a>

```go
func DataPartitions() IotfleetwiseCampaignDataPartitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime"></a>

```go
func LastModificationTime() *string
```

- *Type:* *string

---

##### `SignalsToCollect`<sup>Required</sup> <a name="SignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect"></a>

```go
func SignalsToCollect() IotfleetwiseCampaignSignalsToCollectList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a>

---

##### `SignalsToFetch`<sup>Required</sup> <a name="SignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch"></a>

```go
func SignalsToFetch() IotfleetwiseCampaignSignalsToFetchList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags"></a>

```go
func Tags() IotfleetwiseCampaignTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CollectionSchemeInput`<sup>Optional</sup> <a name="CollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput"></a>

```go
func CollectionSchemeInput() interface{}
```

- *Type:* interface{}

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DataDestinationConfigsInput`<sup>Optional</sup> <a name="DataDestinationConfigsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput"></a>

```go
func DataDestinationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExtraDimensionsInput`<sup>Optional</sup> <a name="DataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput"></a>

```go
func DataExtraDimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataPartitionsInput`<sup>Optional</sup> <a name="DataPartitionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput"></a>

```go
func DataPartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiagnosticsModeInput`<sup>Optional</sup> <a name="DiagnosticsModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput"></a>

```go
func DiagnosticsModeInput() *string
```

- *Type:* *string

---

##### `ExpiryTimeInput`<sup>Optional</sup> <a name="ExpiryTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput"></a>

```go
func ExpiryTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PostTriggerCollectionDurationInput`<sup>Optional</sup> <a name="PostTriggerCollectionDurationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput"></a>

```go
func PostTriggerCollectionDurationInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `SignalCatalogArnInput`<sup>Optional</sup> <a name="SignalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput"></a>

```go
func SignalCatalogArnInput() *string
```

- *Type:* *string

---

##### `SignalsToCollectInput`<sup>Optional</sup> <a name="SignalsToCollectInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput"></a>

```go
func SignalsToCollectInput() interface{}
```

- *Type:* interface{}

---

##### `SignalsToFetchInput`<sup>Optional</sup> <a name="SignalsToFetchInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput"></a>

```go
func SignalsToFetchInput() interface{}
```

- *Type:* interface{}

---

##### `SpoolingModeInput`<sup>Optional</sup> <a name="SpoolingModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput"></a>

```go
func SpoolingModeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput"></a>

```go
func TargetArnInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DataExtraDimensions`<sup>Required</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions"></a>

```go
func DataExtraDimensions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiagnosticsMode`<sup>Required</sup> <a name="DiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode"></a>

```go
func DiagnosticsMode() *string
```

- *Type:* *string

---

##### `ExpiryTime`<sup>Required</sup> <a name="ExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime"></a>

```go
func ExpiryTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PostTriggerCollectionDuration`<sup>Required</sup> <a name="PostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```go
func PostTriggerCollectionDuration() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn"></a>

```go
func SignalCatalogArn() *string
```

- *Type:* *string

---

##### `SpoolingMode`<sup>Required</sup> <a name="SpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode"></a>

```go
func SpoolingMode() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignCollectionScheme <a name="IotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignCollectionScheme {
	ConditionBasedCollectionScheme: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme,
	TimeBasedCollectionScheme: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme">ConditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme">TimeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}. |

---

##### `ConditionBasedCollectionScheme`<sup>Optional</sup> <a name="ConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme"></a>

```go
ConditionBasedCollectionScheme IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

##### `TimeBasedCollectionScheme`<sup>Optional</sup> <a name="TimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme"></a>

```go
TimeBasedCollectionScheme IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme {
	ConditionLanguageVersion: *f64,
	Expression: *string,
	MinimumTriggerIntervalMs: *f64,
	TriggerMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs">MinimumTriggerIntervalMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion"></a>

```go
ConditionLanguageVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `MinimumTriggerIntervalMs`<sup>Optional</sup> <a name="MinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs"></a>

```go
MinimumTriggerIntervalMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode"></a>

```go
TriggerMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme {
	PeriodMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}. |

---

##### `PeriodMs`<sup>Optional</sup> <a name="PeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs"></a>

```go
PeriodMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

### IotfleetwiseCampaignConfig <a name="IotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionScheme: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme,
	Name: *string,
	SignalCatalogArn: *string,
	TargetArn: *string,
	Action: *string,
	Compression: *string,
	DataDestinationConfigs: interface{},
	DataExtraDimensions: *[]*string,
	DataPartitions: interface{},
	Description: *string,
	DiagnosticsMode: *string,
	ExpiryTime: *string,
	PostTriggerCollectionDuration: *f64,
	Priority: *f64,
	SignalsToCollect: interface{},
	SignalsToFetch: interface{},
	SpoolingMode: *string,
	StartTime: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme">CollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn">TargetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression">Compression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs">DataDestinationConfigs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions">DataPartitions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode">DiagnosticsMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime">ExpiryTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration">PostTriggerCollectionDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect">SignalsToCollect</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch">SignalsToFetch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode">SpoolingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionScheme`<sup>Required</sup> <a name="CollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme"></a>

```go
CollectionScheme IotfleetwiseCampaignCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn"></a>

```go
SignalCatalogArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn"></a>

```go
TargetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `DataDestinationConfigs`<sup>Optional</sup> <a name="DataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs"></a>

```go
DataDestinationConfigs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `DataExtraDimensions`<sup>Optional</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions"></a>

```go
DataExtraDimensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `DataPartitions`<sup>Optional</sup> <a name="DataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions"></a>

```go
DataPartitions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `DiagnosticsMode`<sup>Optional</sup> <a name="DiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode"></a>

```go
DiagnosticsMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `ExpiryTime`<sup>Optional</sup> <a name="ExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime"></a>

```go
ExpiryTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `PostTriggerCollectionDuration`<sup>Optional</sup> <a name="PostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration"></a>

```go
PostTriggerCollectionDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `SignalsToCollect`<sup>Optional</sup> <a name="SignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect"></a>

```go
SignalsToCollect interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `SignalsToFetch`<sup>Optional</sup> <a name="SignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch"></a>

```go
SignalsToFetch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `SpoolingMode`<sup>Optional</sup> <a name="SpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode"></a>

```go
SpoolingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

### IotfleetwiseCampaignDataDestinationConfigs <a name="IotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataDestinationConfigs {
	MqttTopicConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig,
	S3Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config,
	TimestreamConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig">MqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig">TimestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}. |

---

##### `MqttTopicConfig`<sup>Optional</sup> <a name="MqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig"></a>

```go
MqttTopicConfig IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}.

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config"></a>

```go
S3Config IotfleetwiseCampaignDataDestinationConfigsS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}.

---

##### `TimestreamConfig`<sup>Optional</sup> <a name="TimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig"></a>

```go
TimestreamConfig IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}.

---

### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig {
	ExecutionRoleArn: *string,
	MqttTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn">MqttTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}. |

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `MqttTopicArn`<sup>Optional</sup> <a name="MqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn"></a>

```go
MqttTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

### IotfleetwiseCampaignDataDestinationConfigsS3Config <a name="IotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config {
	BucketArn: *string,
	DataFormat: *string,
	Prefix: *string,
	StorageCompressionFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat">StorageCompressionFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

##### `StorageCompressionFormat`<sup>Optional</sup> <a name="StorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat"></a>

```go
StorageCompressionFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig {
	ExecutionRoleArn: *string,
	TimestreamTableArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn">TimestreamTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}. |

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `TimestreamTableArn`<sup>Optional</sup> <a name="TimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn"></a>

```go
TimestreamTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

### IotfleetwiseCampaignDataPartitions <a name="IotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataPartitions {
	Id: *string,
	StorageOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions,
	UploadOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions">StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions">UploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageOptions`<sup>Optional</sup> <a name="StorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions"></a>

```go
StorageOptions IotfleetwiseCampaignDataPartitionsStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}.

---

##### `UploadOptions`<sup>Optional</sup> <a name="UploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions"></a>

```go
UploadOptions IotfleetwiseCampaignDataPartitionsUploadOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptions <a name="IotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataPartitionsStorageOptions {
	MaximumSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize,
	MinimumTimeToLive: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive,
	StorageLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize">MaximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive">MinimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}. |

---

##### `MaximumSize`<sup>Optional</sup> <a name="MaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize"></a>

```go
MaximumSize IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

##### `MinimumTimeToLive`<sup>Optional</sup> <a name="MinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive"></a>

```go
MinimumTimeToLive IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize {
	Unit: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive {
	Unit: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsUploadOptions <a name="IotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignDataPartitionsUploadOptions {
	ConditionLanguageVersion: *f64,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion"></a>

```go
ConditionLanguageVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

### IotfleetwiseCampaignSignalsToCollect <a name="IotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignSignalsToCollect {
	DataPartitionId: *string,
	MaxSampleCount: *f64,
	MinimumSamplingIntervalMs: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId">DataPartitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount">MaxSampleCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs">MinimumSamplingIntervalMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |

---

##### `DataPartitionId`<sup>Optional</sup> <a name="DataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId"></a>

```go
DataPartitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}.

---

##### `MaxSampleCount`<sup>Optional</sup> <a name="MaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount"></a>

```go
MaxSampleCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}.

---

##### `MinimumSamplingIntervalMs`<sup>Optional</sup> <a name="MinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs"></a>

```go
MinimumSamplingIntervalMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

### IotfleetwiseCampaignSignalsToFetch <a name="IotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignSignalsToFetch {
	Actions: *[]*string,
	ConditionLanguageVersion: *f64,
	FullyQualifiedName: *string,
	SignalFetchConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig">SignalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}.

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion"></a>

```go
ConditionLanguageVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}.

---

##### `SignalFetchConfig`<sup>Optional</sup> <a name="SignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig"></a>

```go
SignalFetchConfig IotfleetwiseCampaignSignalsToFetchSignalFetchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig {
	ConditionBased: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased,
	TimeBased: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased">ConditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased">TimeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}. |

---

##### `ConditionBased`<sup>Optional</sup> <a name="ConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased"></a>

```go
ConditionBased IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

##### `TimeBased`<sup>Optional</sup> <a name="TimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased"></a>

```go
TimeBased IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased {
	ConditionExpression: *string,
	TriggerMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `ConditionExpression`<sup>Optional</sup> <a name="ConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression"></a>

```go
ConditionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode"></a>

```go
TriggerMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased {
	ExecutionFrequencyMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs">ExecutionFrequencyMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}. |

---

##### `ExecutionFrequencyMs`<sup>Optional</sup> <a name="ExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs"></a>

```go
ExecutionFrequencyMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

### IotfleetwiseCampaignTags <a name="IotfleetwiseCampaignTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

&iotfleetwisecampaign.IotfleetwiseCampaignTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs">ResetMinimumTriggerIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion"></a>

```go
func ResetConditionLanguageVersion()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetMinimumTriggerIntervalMs` <a name="ResetMinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs"></a>

```go
func ResetMinimumTriggerIntervalMs()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode"></a>

```go
func ResetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput">MinimumTriggerIntervalMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput">TriggerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">MinimumTriggerIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput"></a>

```go
func ConditionLanguageVersionInput() *f64
```

- *Type:* *f64

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `MinimumTriggerIntervalMsInput`<sup>Optional</sup> <a name="MinimumTriggerIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput"></a>

```go
func MinimumTriggerIntervalMsInput() *f64
```

- *Type:* *f64

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput"></a>

```go
func TriggerModeInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```go
func ConditionLanguageVersion() *f64
```

- *Type:* *f64

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `MinimumTriggerIntervalMs`<sup>Required</sup> <a name="MinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```go
func MinimumTriggerIntervalMs() *f64
```

- *Type:* *f64

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```go
func TriggerMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignCollectionSchemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignCollectionSchemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme">PutConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme">PutTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme">ResetConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme">ResetTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionBasedCollectionScheme` <a name="PutConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme"></a>

```go
func PutConditionBasedCollectionScheme(value IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `PutTimeBasedCollectionScheme` <a name="PutTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme"></a>

```go
func PutTimeBasedCollectionScheme(value IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `ResetConditionBasedCollectionScheme` <a name="ResetConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme"></a>

```go
func ResetConditionBasedCollectionScheme()
```

##### `ResetTimeBasedCollectionScheme` <a name="ResetTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme"></a>

```go
func ResetTimeBasedCollectionScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">ConditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">TimeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput">ConditionBasedCollectionSchemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput">TimeBasedCollectionSchemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionBasedCollectionScheme`<sup>Required</sup> <a name="ConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```go
func ConditionBasedCollectionScheme() IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `TimeBasedCollectionScheme`<sup>Required</sup> <a name="TimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```go
func TimeBasedCollectionScheme() IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `ConditionBasedCollectionSchemeInput`<sup>Optional</sup> <a name="ConditionBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput"></a>

```go
func ConditionBasedCollectionSchemeInput() interface{}
```

- *Type:* interface{}

---

##### `TimeBasedCollectionSchemeInput`<sup>Optional</sup> <a name="TimeBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput"></a>

```go
func TimeBasedCollectionSchemeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs">ResetPeriodMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodMs` <a name="ResetPeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs"></a>

```go
func ResetPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput">PeriodMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodMsInput`<sup>Optional</sup> <a name="PeriodMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput"></a>

```go
func PeriodMsInput() *f64
```

- *Type:* *f64

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```go
func PeriodMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataDestinationConfigsList <a name="IotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataDestinationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseCampaignDataDestinationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```go
func Get(index *f64) IotfleetwiseCampaignDataDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn">ResetMqttTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetMqttTopicArn` <a name="ResetMqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn"></a>

```go
func ResetMqttTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput">MqttTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">MqttTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `MqttTopicArnInput`<sup>Optional</sup> <a name="MqttTopicArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput"></a>

```go
func MqttTopicArnInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `MqttTopicArn`<sup>Required</sup> <a name="MqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```go
func MqttTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataDestinationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseCampaignDataDestinationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig">PutMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig">PutTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig">ResetMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig">ResetTimestreamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMqttTopicConfig` <a name="PutMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig"></a>

```go
func PutMqttTopicConfig(value IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `PutS3Config` <a name="PutS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config"></a>

```go
func PutS3Config(value IotfleetwiseCampaignDataDestinationConfigsS3Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `PutTimestreamConfig` <a name="PutTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig"></a>

```go
func PutTimestreamConfig(value IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `ResetMqttTopicConfig` <a name="ResetMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig"></a>

```go
func ResetMqttTopicConfig()
```

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config"></a>

```go
func ResetS3Config()
```

##### `ResetTimestreamConfig` <a name="ResetTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig"></a>

```go
func ResetTimestreamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">MqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">TimestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput">MqttTopicConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput">TimestreamConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MqttTopicConfig`<sup>Required</sup> <a name="MqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```go
func MqttTopicConfig() IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```go
func S3Config() IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `TimestreamConfig`<sup>Required</sup> <a name="TimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```go
func TimestreamConfig() IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `MqttTopicConfigInput`<sup>Optional</sup> <a name="MqttTopicConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput"></a>

```go
func MqttTopicConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput"></a>

```go
func S3ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TimestreamConfigInput`<sup>Optional</sup> <a name="TimestreamConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput"></a>

```go
func TimestreamConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat">ResetStorageCompressionFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetStorageCompressionFormat` <a name="ResetStorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat"></a>

```go
func ResetStorageCompressionFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput">StorageCompressionFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">StorageCompressionFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StorageCompressionFormatInput`<sup>Optional</sup> <a name="StorageCompressionFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput"></a>

```go
func StorageCompressionFormatInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StorageCompressionFormat`<sup>Required</sup> <a name="StorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```go
func StorageCompressionFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn">ResetTimestreamTableArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetTimestreamTableArn` <a name="ResetTimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn"></a>

```go
func ResetTimestreamTableArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput">TimestreamTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">TimestreamTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TimestreamTableArnInput`<sup>Optional</sup> <a name="TimestreamTableArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput"></a>

```go
func TimestreamTableArnInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `TimestreamTableArn`<sup>Required</sup> <a name="TimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```go
func TimestreamTableArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsList <a name="IotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseCampaignDataPartitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get"></a>

```go
func Get(index *f64) IotfleetwiseCampaignDataPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseCampaignDataPartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions">PutStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions">PutUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions">ResetStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions">ResetUploadOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageOptions` <a name="PutStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions"></a>

```go
func PutStorageOptions(value IotfleetwiseCampaignDataPartitionsStorageOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `PutUploadOptions` <a name="PutUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions"></a>

```go
func PutUploadOptions(value IotfleetwiseCampaignDataPartitionsUploadOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetStorageOptions` <a name="ResetStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions"></a>

```go
func ResetStorageOptions()
```

##### `ResetUploadOptions` <a name="ResetUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions"></a>

```go
func ResetUploadOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">UploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput">StorageOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput">UploadOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageOptions`<sup>Required</sup> <a name="StorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```go
func StorageOptions() IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `UploadOptions`<sup>Required</sup> <a name="UploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```go
func UploadOptions() IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StorageOptionsInput`<sup>Optional</sup> <a name="StorageOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput"></a>

```go
func StorageOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `UploadOptionsInput`<sup>Optional</sup> <a name="UploadOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput"></a>

```go
func UploadOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize">PutMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive">PutMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize">ResetMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive">ResetMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumSize` <a name="PutMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize"></a>

```go
func PutMaximumSize(value IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `PutMinimumTimeToLive` <a name="PutMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive"></a>

```go
func PutMinimumTimeToLive(value IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `ResetMaximumSize` <a name="ResetMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize"></a>

```go
func ResetMaximumSize()
```

##### `ResetMinimumTimeToLive` <a name="ResetMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive"></a>

```go
func ResetMinimumTimeToLive()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">MaximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">MinimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput">MaximumSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput">MinimumTimeToLiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```go
func MaximumSize() IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `MinimumTimeToLive`<sup>Required</sup> <a name="MinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```go
func MinimumTimeToLive() IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `MaximumSizeInput`<sup>Optional</sup> <a name="MaximumSizeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput"></a>

```go
func MaximumSizeInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumTimeToLiveInput`<sup>Optional</sup> <a name="MinimumTimeToLiveInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput"></a>

```go
func MinimumTimeToLiveInput() interface{}
```

- *Type:* interface{}

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion"></a>

```go
func ResetConditionLanguageVersion()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput"></a>

```go
func ConditionLanguageVersionInput() *f64
```

- *Type:* *f64

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```go
func ConditionLanguageVersion() *f64
```

- *Type:* *f64

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToCollectList <a name="IotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToCollectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseCampaignSignalsToCollectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get"></a>

```go
func Get(index *f64) IotfleetwiseCampaignSignalsToCollectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToCollectOutputReference <a name="IotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToCollectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseCampaignSignalsToCollectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId">ResetDataPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount">ResetMaxSampleCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs">ResetMinimumSamplingIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataPartitionId` <a name="ResetDataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId"></a>

```go
func ResetDataPartitionId()
```

##### `ResetMaxSampleCount` <a name="ResetMaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount"></a>

```go
func ResetMaxSampleCount()
```

##### `ResetMinimumSamplingIntervalMs` <a name="ResetMinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs"></a>

```go
func ResetMinimumSamplingIntervalMs()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput">DataPartitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput">MaxSampleCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput">MinimumSamplingIntervalMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">DataPartitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">MaxSampleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">MinimumSamplingIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataPartitionIdInput`<sup>Optional</sup> <a name="DataPartitionIdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput"></a>

```go
func DataPartitionIdInput() *string
```

- *Type:* *string

---

##### `MaxSampleCountInput`<sup>Optional</sup> <a name="MaxSampleCountInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput"></a>

```go
func MaxSampleCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumSamplingIntervalMsInput`<sup>Optional</sup> <a name="MinimumSamplingIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput"></a>

```go
func MinimumSamplingIntervalMsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DataPartitionId`<sup>Required</sup> <a name="DataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```go
func DataPartitionId() *string
```

- *Type:* *string

---

##### `MaxSampleCount`<sup>Required</sup> <a name="MaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```go
func MaxSampleCount() *f64
```

- *Type:* *f64

---

##### `MinimumSamplingIntervalMs`<sup>Required</sup> <a name="MinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```go
func MinimumSamplingIntervalMs() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToFetchList <a name="IotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToFetchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseCampaignSignalsToFetchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get"></a>

```go
func Get(index *f64) IotfleetwiseCampaignSignalsToFetchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToFetchOutputReference <a name="IotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToFetchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseCampaignSignalsToFetchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig">PutSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig">ResetSignalFetchConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignalFetchConfig` <a name="PutSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig"></a>

```go
func PutSignalFetchConfig(value IotfleetwiseCampaignSignalsToFetchSignalFetchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion"></a>

```go
func ResetConditionLanguageVersion()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```

##### `ResetSignalFetchConfig` <a name="ResetSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig"></a>

```go
func ResetSignalFetchConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">SignalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput">SignalFetchConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SignalFetchConfig`<sup>Required</sup> <a name="SignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```go
func SignalFetchConfig() IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput"></a>

```go
func ConditionLanguageVersionInput() *f64
```

- *Type:* *f64

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `SignalFetchConfigInput`<sup>Optional</sup> <a name="SignalFetchConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput"></a>

```go
func SignalFetchConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```go
func ConditionLanguageVersion() *f64
```

- *Type:* *f64

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression">ResetConditionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionExpression` <a name="ResetConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression"></a>

```go
func ResetConditionExpression()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode"></a>

```go
func ResetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput">TriggerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput"></a>

```go
func ConditionExpressionInput() *string
```

- *Type:* *string

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput"></a>

```go
func TriggerModeInput() *string
```

- *Type:* *string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```go
func ConditionExpression() *string
```

- *Type:* *string

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```go
func TriggerMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased">PutConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased">PutTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased">ResetConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased">ResetTimeBased</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionBased` <a name="PutConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased"></a>

```go
func PutConditionBased(value IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `PutTimeBased` <a name="PutTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased"></a>

```go
func PutTimeBased(value IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `ResetConditionBased` <a name="ResetConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased"></a>

```go
func ResetConditionBased()
```

##### `ResetTimeBased` <a name="ResetTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased"></a>

```go
func ResetTimeBased()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">ConditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">TimeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput">ConditionBasedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput">TimeBasedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionBased`<sup>Required</sup> <a name="ConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```go
func ConditionBased() IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `TimeBased`<sup>Required</sup> <a name="TimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```go
func TimeBased() IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `ConditionBasedInput`<sup>Optional</sup> <a name="ConditionBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput"></a>

```go
func ConditionBasedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeBasedInput`<sup>Optional</sup> <a name="TimeBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput"></a>

```go
func TimeBasedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs">ResetExecutionFrequencyMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionFrequencyMs` <a name="ResetExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs"></a>

```go
func ResetExecutionFrequencyMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput">ExecutionFrequencyMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">ExecutionFrequencyMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionFrequencyMsInput`<sup>Optional</sup> <a name="ExecutionFrequencyMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput"></a>

```go
func ExecutionFrequencyMsInput() *f64
```

- *Type:* *f64

---

##### `ExecutionFrequencyMs`<sup>Required</sup> <a name="ExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```go
func ExecutionFrequencyMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignTagsList <a name="IotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseCampaignTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get"></a>

```go
func Get(index *f64) IotfleetwiseCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseCampaignTagsOutputReference <a name="IotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisecampaign"

iotfleetwisecampaign.NewIotfleetwiseCampaignTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseCampaignTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



