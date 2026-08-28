# `cloudtrailTrail` Submodule <a name="`cloudtrailTrail` Submodule" id="@cdktn/provider-awscc.cloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailTrail <a name="CloudtrailTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrail(scope Construct, id *string, config CloudtrailTrailConfig) CloudtrailTrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig">CloudtrailTrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig">CloudtrailTrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors">PutAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations">PutAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors">PutEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors">PutInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors">ResetAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations">ResetAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn">ResetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn">ResetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation">ResetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors">ResetEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents">ResetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors">ResetInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail">ResetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail">ResetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName">ResetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName">ResetTrailName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedEventSelectors` <a name="PutAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors"></a>

```go
func PutAdvancedEventSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAggregationConfigurations` <a name="PutAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations"></a>

```go
func PutAggregationConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventSelectors` <a name="PutEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors"></a>

```go
func PutEventSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInsightSelectors` <a name="PutInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors"></a>

```go
func PutInsightSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvancedEventSelectors` <a name="ResetAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors"></a>

```go
func ResetAdvancedEventSelectors()
```

##### `ResetAggregationConfigurations` <a name="ResetAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations"></a>

```go
func ResetAggregationConfigurations()
```

##### `ResetCloudwatchLogsLogGroupArn` <a name="ResetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn"></a>

```go
func ResetCloudwatchLogsLogGroupArn()
```

##### `ResetCloudwatchLogsRoleArn` <a name="ResetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn"></a>

```go
func ResetCloudwatchLogsRoleArn()
```

##### `ResetEnableLogFileValidation` <a name="ResetEnableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation"></a>

```go
func ResetEnableLogFileValidation()
```

##### `ResetEventSelectors` <a name="ResetEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors"></a>

```go
func ResetEventSelectors()
```

##### `ResetIncludeGlobalServiceEvents` <a name="ResetIncludeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents"></a>

```go
func ResetIncludeGlobalServiceEvents()
```

##### `ResetInsightSelectors` <a name="ResetInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors"></a>

```go
func ResetInsightSelectors()
```

##### `ResetIsMultiRegionTrail` <a name="ResetIsMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail"></a>

```go
func ResetIsMultiRegionTrail()
```

##### `ResetIsOrganizationTrail` <a name="ResetIsOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail"></a>

```go
func ResetIsOrganizationTrail()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```

##### `ResetSnsTopicName` <a name="ResetSnsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName"></a>

```go
func ResetSnsTopicName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrailName` <a name="ResetTrailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName"></a>

```go
func ResetTrailName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.CloudtrailTrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.CloudtrailTrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.CloudtrailTrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.CloudtrailTrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudtrailTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations">AggregationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors">EventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors">InsightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput">AdvancedEventSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput">AggregationConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput">CloudwatchLogsLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput">EnableLogFileValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput">EventSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput">IncludeGlobalServiceEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput">InsightSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput">IsLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput">IsMultiRegionTrailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput">IsOrganizationTrailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput">SnsTopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput">TrailNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation">EnableLogFileValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents">IncludeGlobalServiceEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging">IsLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail">IsMultiRegionTrail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail">IsOrganizationTrail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName">SnsTopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName">TrailName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors"></a>

```go
func AdvancedEventSelectors() CloudtrailTrailAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `AggregationConfigurations`<sup>Required</sup> <a name="AggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations"></a>

```go
func AggregationConfigurations() CloudtrailTrailAggregationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EventSelectors`<sup>Required</sup> <a name="EventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors"></a>

```go
func EventSelectors() CloudtrailTrailEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsightSelectors`<sup>Required</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors"></a>

```go
func InsightSelectors() CloudtrailTrailInsightSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a>

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags"></a>

```go
func Tags() CloudtrailTrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a>

---

##### `AdvancedEventSelectorsInput`<sup>Optional</sup> <a name="AdvancedEventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput"></a>

```go
func AdvancedEventSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `AggregationConfigurationsInput`<sup>Optional</sup> <a name="AggregationConfigurationsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput"></a>

```go
func AggregationConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput"></a>

```go
func CloudwatchLogsLogGroupArnInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput"></a>

```go
func CloudwatchLogsRoleArnInput() *string
```

- *Type:* *string

---

##### `EnableLogFileValidationInput`<sup>Optional</sup> <a name="EnableLogFileValidationInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput"></a>

```go
func EnableLogFileValidationInput() interface{}
```

- *Type:* interface{}

---

##### `EventSelectorsInput`<sup>Optional</sup> <a name="EventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput"></a>

```go
func EventSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalServiceEventsInput`<sup>Optional</sup> <a name="IncludeGlobalServiceEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput"></a>

```go
func IncludeGlobalServiceEventsInput() interface{}
```

- *Type:* interface{}

---

##### `InsightSelectorsInput`<sup>Optional</sup> <a name="InsightSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput"></a>

```go
func InsightSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `IsLoggingInput`<sup>Optional</sup> <a name="IsLoggingInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput"></a>

```go
func IsLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IsMultiRegionTrailInput`<sup>Optional</sup> <a name="IsMultiRegionTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput"></a>

```go
func IsMultiRegionTrailInput() interface{}
```

- *Type:* interface{}

---

##### `IsOrganizationTrailInput`<sup>Optional</sup> <a name="IsOrganizationTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput"></a>

```go
func IsOrganizationTrailInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `SnsTopicNameInput`<sup>Optional</sup> <a name="SnsTopicNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput"></a>

```go
func SnsTopicNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrailNameInput`<sup>Optional</sup> <a name="TrailNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput"></a>

```go
func TrailNameInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```go
func CloudwatchLogsLogGroupArn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```go
func CloudwatchLogsRoleArn() *string
```

- *Type:* *string

---

##### `EnableLogFileValidation`<sup>Required</sup> <a name="EnableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation"></a>

```go
func EnableLogFileValidation() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalServiceEvents`<sup>Required</sup> <a name="IncludeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents"></a>

```go
func IncludeGlobalServiceEvents() interface{}
```

- *Type:* interface{}

---

##### `IsLogging`<sup>Required</sup> <a name="IsLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging"></a>

```go
func IsLogging() interface{}
```

- *Type:* interface{}

---

##### `IsMultiRegionTrail`<sup>Required</sup> <a name="IsMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail"></a>

```go
func IsMultiRegionTrail() interface{}
```

- *Type:* interface{}

---

##### `IsOrganizationTrail`<sup>Required</sup> <a name="IsOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail"></a>

```go
func IsOrganizationTrail() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `SnsTopicName`<sup>Required</sup> <a name="SnsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName"></a>

```go
func SnsTopicName() *string
```

- *Type:* *string

---

##### `TrailName`<sup>Required</sup> <a name="TrailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName"></a>

```go
func TrailName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailTrailAdvancedEventSelectors <a name="CloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailAdvancedEventSelectors {
	FieldSelectors: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors">FieldSelectors</a></code> | <code>interface{}</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name">Name</a></code> | <code>*string</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `FieldSelectors`<sup>Optional</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors"></a>

```go
FieldSelectors interface{}
```

- *Type:* interface{}

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#field_selectors CloudtrailTrail#field_selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name"></a>

```go
Name *string
```

- *Type:* *string

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#name CloudtrailTrail#name}

---

### CloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors {
	EndsWith: *[]*string,
	EqualTo: *[]*string,
	Field: *string,
	NotEndsWith: *[]*string,
	NotEquals: *[]*string,
	NotStartsWith: *[]*string,
	StartsWith: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field">Field</a></code> | <code>*string</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```go
EndsWith *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#ends_with CloudtrailTrail#ends_with}

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```go
EqualTo *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#equals CloudtrailTrail#equals}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field"></a>

```go
Field *string
```

- *Type:* *string

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#field CloudtrailTrail#field}

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```go
NotEndsWith *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_ends_with CloudtrailTrail#not_ends_with}

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```go
NotEquals *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_equals CloudtrailTrail#not_equals}

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```go
NotStartsWith *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_starts_with CloudtrailTrail#not_starts_with}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```go
StartsWith *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#starts_with CloudtrailTrail#starts_with}

---

### CloudtrailTrailAggregationConfigurations <a name="CloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailAggregationConfigurations {
	EventCategory: *string,
	Templates: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory">EventCategory</a></code> | <code>*string</code> | The category of events to be aggregated. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates">Templates</a></code> | <code>*[]*string</code> | Contains all templates in an aggregation configuration. |

---

##### `EventCategory`<sup>Optional</sup> <a name="EventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory"></a>

```go
EventCategory *string
```

- *Type:* *string

The category of events to be aggregated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_category CloudtrailTrail#event_category}

---

##### `Templates`<sup>Optional</sup> <a name="Templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates"></a>

```go
Templates *[]*string
```

- *Type:* *[]*string

Contains all templates in an aggregation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#templates CloudtrailTrail#templates}

---

### CloudtrailTrailConfig <a name="CloudtrailTrailConfig" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IsLogging: interface{},
	S3BucketName: *string,
	AdvancedEventSelectors: interface{},
	AggregationConfigurations: interface{},
	CloudwatchLogsLogGroupArn: *string,
	CloudwatchLogsRoleArn: *string,
	EnableLogFileValidation: interface{},
	EventSelectors: interface{},
	IncludeGlobalServiceEvents: interface{},
	InsightSelectors: interface{},
	IsMultiRegionTrail: interface{},
	IsOrganizationTrail: interface{},
	KmsKeyId: *string,
	S3KeyPrefix: *string,
	SnsTopicName: *string,
	Tags: interface{},
	TrailName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging">IsLogging</a></code> | <code>interface{}</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code>interface{}</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations">AggregationConfigurations</a></code> | <code>interface{}</code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation">EnableLogFileValidation</a></code> | <code>interface{}</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors">EventSelectors</a></code> | <code>interface{}</code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents">IncludeGlobalServiceEvents</a></code> | <code>interface{}</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors">InsightSelectors</a></code> | <code>interface{}</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail">IsMultiRegionTrail</a></code> | <code>interface{}</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail">IsOrganizationTrail</a></code> | <code>interface{}</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName">SnsTopicName</a></code> | <code>*string</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName">TrailName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsLogging`<sup>Required</sup> <a name="IsLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging"></a>

```go
IsLogging interface{}
```

- *Type:* interface{}

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `AdvancedEventSelectors`<sup>Optional</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors"></a>

```go
AdvancedEventSelectors interface{}
```

- *Type:* interface{}

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `AggregationConfigurations`<sup>Optional</sup> <a name="AggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations"></a>

```go
AggregationConfigurations interface{}
```

- *Type:* interface{}

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `CloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn"></a>

```go
CloudwatchLogsLogGroupArn *string
```

- *Type:* *string

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `CloudwatchLogsRoleArn`<sup>Optional</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn"></a>

```go
CloudwatchLogsRoleArn *string
```

- *Type:* *string

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `EnableLogFileValidation`<sup>Optional</sup> <a name="EnableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation"></a>

```go
EnableLogFileValidation interface{}
```

- *Type:* interface{}

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `EventSelectors`<sup>Optional</sup> <a name="EventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors"></a>

```go
EventSelectors interface{}
```

- *Type:* interface{}

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `IncludeGlobalServiceEvents`<sup>Optional</sup> <a name="IncludeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents"></a>

```go
IncludeGlobalServiceEvents interface{}
```

- *Type:* interface{}

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `InsightSelectors`<sup>Optional</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors"></a>

```go
InsightSelectors interface{}
```

- *Type:* interface{}

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `IsMultiRegionTrail`<sup>Optional</sup> <a name="IsMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail"></a>

```go
IsMultiRegionTrail interface{}
```

- *Type:* interface{}

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `IsOrganizationTrail`<sup>Optional</sup> <a name="IsOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail"></a>

```go
IsOrganizationTrail interface{}
```

- *Type:* interface{}

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `SnsTopicName`<sup>Optional</sup> <a name="SnsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName"></a>

```go
SnsTopicName *string
```

- *Type:* *string

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `TrailName`<sup>Optional</sup> <a name="TrailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName"></a>

```go
TrailName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

### CloudtrailTrailEventSelectors <a name="CloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailEventSelectors {
	DataResources: interface{},
	ExcludeManagementEventSources: *[]*string,
	IncludeManagementEvents: interface{},
	ReadWriteType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources">DataResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources">ExcludeManagementEventSources</a></code> | <code>*[]*string</code> | An optional list of service event sources from which you do not want management events to be logged on your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents">IncludeManagementEvents</a></code> | <code>interface{}</code> | Specify if you want your event selector to include management events for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType">ReadWriteType</a></code> | <code>*string</code> | Specify if you want your trail to log read-only events, write-only events, or all. |

---

##### `DataResources`<sup>Optional</sup> <a name="DataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources"></a>

```go
DataResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}.

---

##### `ExcludeManagementEventSources`<sup>Optional</sup> <a name="ExcludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources"></a>

```go
ExcludeManagementEventSources *[]*string
```

- *Type:* *[]*string

An optional list of service event sources from which you do not want management events to be logged on your trail.

In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}

---

##### `IncludeManagementEvents`<sup>Optional</sup> <a name="IncludeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents"></a>

```go
IncludeManagementEvents interface{}
```

- *Type:* interface{}

Specify if you want your event selector to include management events for your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#include_management_events CloudtrailTrail#include_management_events}

---

##### `ReadWriteType`<sup>Optional</sup> <a name="ReadWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType"></a>

```go
ReadWriteType *string
```

- *Type:* *string

Specify if you want your trail to log read-only events, write-only events, or all.

For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#read_write_type CloudtrailTrail#read_write_type}

---

### CloudtrailTrailEventSelectorsDataResources <a name="CloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailEventSelectorsDataResources {
	Type: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type">Type</a></code> | <code>*string</code> | The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values">Values</a></code> | <code>*[]*string</code> | An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type"></a>

```go
Type *string
```

- *Type:* *string

The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#type CloudtrailTrail#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#values CloudtrailTrail#values}

---

### CloudtrailTrailInsightSelectors <a name="CloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailInsightSelectors {
	EventCategories: *[]*string,
	InsightType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | The categories of events for which to log insights. By default, insights are logged for management events only. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType">InsightType</a></code> | <code>*string</code> | The type of insight to log on a trail. |

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories"></a>

```go
EventCategories *[]*string
```

- *Type:* *[]*string

The categories of events for which to log insights. By default, insights are logged for management events only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_categories CloudtrailTrail#event_categories}

---

##### `InsightType`<sup>Optional</sup> <a name="InsightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType"></a>

```go
InsightType *string
```

- *Type:* *string

The type of insight to log on a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#insight_type CloudtrailTrail#insight_type}

---

### CloudtrailTrailTags <a name="CloudtrailTrailTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

&cloudtrailtrail.CloudtrailTrailTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#key CloudtrailTrail#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#value CloudtrailTrail#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```go
func ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```go
func ResetEqualTo()
```

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```go
func ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```go
func ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```go
func ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```go
func ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```go
func EndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```go
func EqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```go
func NotEndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```go
func NotEqualsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```go
func NotStartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```go
func StartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```go
func EndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```go
func NotEndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```go
func NotStartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```go
func StartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailAdvancedEventSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAdvancedEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailAdvancedEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailAdvancedEventSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAdvancedEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailAdvancedEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors">PutFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors">ResetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelectors` <a name="PutFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```go
func PutFieldSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldSelectors` <a name="ResetFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```go
func ResetFieldSelectors()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">FieldSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```go
func FieldSelectors() CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `FieldSelectorsInput`<sup>Optional</sup> <a name="FieldSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```go
func FieldSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailAggregationConfigurationsList <a name="CloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAggregationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailAggregationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailAggregationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailAggregationConfigurationsOutputReference <a name="CloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailAggregationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailAggregationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory">ResetEventCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates">ResetTemplates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventCategory` <a name="ResetEventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory"></a>

```go
func ResetEventCategory()
```

##### `ResetTemplates` <a name="ResetTemplates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates"></a>

```go
func ResetTemplates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput">EventCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput">TemplatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">EventCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates">Templates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventCategoryInput`<sup>Optional</sup> <a name="EventCategoryInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput"></a>

```go
func EventCategoryInput() *string
```

- *Type:* *string

---

##### `TemplatesInput`<sup>Optional</sup> <a name="TemplatesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput"></a>

```go
func TemplatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventCategory`<sup>Required</sup> <a name="EventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```go
func EventCategory() *string
```

- *Type:* *string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```go
func Templates() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailEventSelectorsDataResourcesList <a name="CloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailEventSelectorsDataResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailEventSelectorsDataResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```go
func Get(index *f64) CloudtrailTrailEventSelectorsDataResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="CloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailEventSelectorsDataResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailEventSelectorsDataResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailEventSelectorsList <a name="CloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailEventSelectorsOutputReference <a name="CloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources">PutDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources">ResetDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources">ResetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents">ResetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType">ResetReadWriteType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataResources` <a name="PutDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources"></a>

```go
func PutDataResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataResources` <a name="ResetDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources"></a>

```go
func ResetDataResources()
```

##### `ResetExcludeManagementEventSources` <a name="ResetExcludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources"></a>

```go
func ResetExcludeManagementEventSources()
```

##### `ResetIncludeManagementEvents` <a name="ResetIncludeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents"></a>

```go
func ResetIncludeManagementEvents()
```

##### `ResetReadWriteType` <a name="ResetReadWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType"></a>

```go
func ResetReadWriteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources">DataResources</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput">DataResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput">ExcludeManagementEventSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput">IncludeManagementEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput">ReadWriteTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">ExcludeManagementEventSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">IncludeManagementEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType">ReadWriteType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataResources`<sup>Required</sup> <a name="DataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```go
func DataResources() CloudtrailTrailEventSelectorsDataResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `DataResourcesInput`<sup>Optional</sup> <a name="DataResourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput"></a>

```go
func DataResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeManagementEventSourcesInput`<sup>Optional</sup> <a name="ExcludeManagementEventSourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput"></a>

```go
func ExcludeManagementEventSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeManagementEventsInput`<sup>Optional</sup> <a name="IncludeManagementEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput"></a>

```go
func IncludeManagementEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ReadWriteTypeInput`<sup>Optional</sup> <a name="ReadWriteTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput"></a>

```go
func ReadWriteTypeInput() *string
```

- *Type:* *string

---

##### `ExcludeManagementEventSources`<sup>Required</sup> <a name="ExcludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```go
func ExcludeManagementEventSources() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeManagementEvents`<sup>Required</sup> <a name="IncludeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```go
func IncludeManagementEvents() interface{}
```

- *Type:* interface{}

---

##### `ReadWriteType`<sup>Required</sup> <a name="ReadWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```go
func ReadWriteType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailInsightSelectorsList <a name="CloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailInsightSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailInsightSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailInsightSelectorsOutputReference <a name="CloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailInsightSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailInsightSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType">ResetInsightType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories"></a>

```go
func ResetEventCategories()
```

##### `ResetInsightType` <a name="ResetInsightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType"></a>

```go
func ResetInsightType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput">InsightTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType">InsightType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput"></a>

```go
func EventCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsightTypeInput`<sup>Optional</sup> <a name="InsightTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput"></a>

```go
func InsightTypeInput() *string
```

- *Type:* *string

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```go
func EventCategories() *[]*string
```

- *Type:* *[]*string

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```go
func InsightType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailTagsList <a name="CloudtrailTrailTagsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailTrailTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get"></a>

```go
func Get(index *f64) CloudtrailTrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailTrailTagsOutputReference <a name="CloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudtrailtrail"

cloudtrailtrail.NewCloudtrailTrailTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailTrailTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



