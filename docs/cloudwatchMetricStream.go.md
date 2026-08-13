# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStream(scope Construct, id *string, config CloudwatchMetricStreamConfig) CloudwatchMetricStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters">PutExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters">PutIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations">PutStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters">ResetExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn">ResetFirehoseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters">ResetIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics">ResetIncludeLinkedAccountsMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations">ResetStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeFilters` <a name="PutExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters"></a>

```go
func PutExcludeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludeFilters` <a name="PutIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters"></a>

```go
func PutIncludeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatisticsConfigurations` <a name="PutStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations"></a>

```go
func PutStatisticsConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludeFilters` <a name="ResetExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters"></a>

```go
func ResetExcludeFilters()
```

##### `ResetFirehoseArn` <a name="ResetFirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn"></a>

```go
func ResetFirehoseArn()
```

##### `ResetIncludeFilters` <a name="ResetIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters"></a>

```go
func ResetIncludeFilters()
```

##### `ResetIncludeLinkedAccountsMetrics` <a name="ResetIncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics"></a>

```go
func ResetIncludeLinkedAccountsMetrics()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```go
func ResetName()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetStatisticsConfigurations` <a name="ResetStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations"></a>

```go
func ResetStatisticsConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchMetricStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters">ExcludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters">IncludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">LastUpdateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations">StatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput">ExcludeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">FirehoseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput">IncludeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput">IncludeLinkedAccountsMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput">StatisticsConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics">IncludeLinkedAccountsMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `ExcludeFilters`<sup>Required</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters"></a>

```go
func ExcludeFilters() CloudwatchMetricStreamExcludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeFilters`<sup>Required</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters"></a>

```go
func IncludeFilters() CloudwatchMetricStreamIncludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a>

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```go
func LastUpdateDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StatisticsConfigurations`<sup>Required</sup> <a name="StatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations"></a>

```go
func StatisticsConfigurations() CloudwatchMetricStreamStatisticsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```go
func Tags() CloudwatchMetricStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a>

---

##### `ExcludeFiltersInput`<sup>Optional</sup> <a name="ExcludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput"></a>

```go
func ExcludeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseArnInput`<sup>Optional</sup> <a name="FirehoseArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```go
func FirehoseArnInput() *string
```

- *Type:* *string

---

##### `IncludeFiltersInput`<sup>Optional</sup> <a name="IncludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput"></a>

```go
func IncludeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeLinkedAccountsMetricsInput`<sup>Optional</sup> <a name="IncludeLinkedAccountsMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput"></a>

```go
func IncludeLinkedAccountsMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StatisticsConfigurationsInput`<sup>Optional</sup> <a name="StatisticsConfigurationsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput"></a>

```go
func StatisticsConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```go
func FirehoseArn() *string
```

- *Type:* *string

---

##### `IncludeLinkedAccountsMetrics`<sup>Required</sup> <a name="IncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics"></a>

```go
func IncludeLinkedAccountsMetrics() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludeFilters: interface{},
	FirehoseArn: *string,
	IncludeFilters: interface{},
	IncludeLinkedAccountsMetrics: interface{},
	Name: *string,
	OutputFormat: *string,
	RoleArn: *string,
	StatisticsConfigurations: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters">ExcludeFilters</a></code> | <code>interface{}</code> | Define which metrics will be not streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | The ARN of the Kinesis Firehose where to stream the data. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters">IncludeFilters</a></code> | <code>interface{}</code> | Define which metrics will be streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics">IncludeLinkedAccountsMetrics</a></code> | <code>interface{}</code> | If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">Name</a></code> | <code>*string</code> | Name of the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | The output format of the data streamed to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that provides access to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations">StatisticsConfigurations</a></code> | <code>interface{}</code> | By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A set of tags to assign to the delivery stream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludeFilters`<sup>Optional</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters"></a>

```go
ExcludeFilters interface{}
```

- *Type:* interface{}

Define which metrics will be not streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}

---

##### `FirehoseArn`<sup>Optional</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```go
FirehoseArn *string
```

- *Type:* *string

The ARN of the Kinesis Firehose where to stream the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}

---

##### `IncludeFilters`<sup>Optional</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters"></a>

```go
IncludeFilters interface{}
```

- *Type:* interface{}

Define which metrics will be streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}

---

##### `IncludeLinkedAccountsMetrics`<sup>Optional</sup> <a name="IncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics"></a>

```go
IncludeLinkedAccountsMetrics interface{}
```

- *Type:* interface{}

If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the metric stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

The output format of the data streamed to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that provides access to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}

---

##### `StatisticsConfigurations`<sup>Optional</sup> <a name="StatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations"></a>

```go
StatisticsConfigurations interface{}
```

- *Type:* interface{}

By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.

You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A set of tags to assign to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}

---

### CloudwatchMetricStreamExcludeFilters <a name="CloudwatchMetricStreamExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamExcludeFilters {
	MetricNames: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace">Namespace</a></code> | <code>*string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames"></a>

```go
MetricNames *[]*string
```

- *Type:* *[]*string

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamIncludeFilters <a name="CloudwatchMetricStreamIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamIncludeFilters {
	MetricNames: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace">Namespace</a></code> | <code>*string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames"></a>

```go
MetricNames *[]*string
```

- *Type:* *[]*string

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamStatisticsConfigurations <a name="CloudwatchMetricStreamStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamStatisticsConfigurations {
	AdditionalStatistics: *[]*string,
	IncludeMetrics: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics">AdditionalStatistics</a></code> | <code>*[]*string</code> | The additional statistics to stream for the metrics listed in IncludeMetrics. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics">IncludeMetrics</a></code> | <code>interface{}</code> | An array that defines the metrics that are to have additional statistics streamed. |

---

##### `AdditionalStatistics`<sup>Optional</sup> <a name="AdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics"></a>

```go
AdditionalStatistics *[]*string
```

- *Type:* *[]*string

The additional statistics to stream for the metrics listed in IncludeMetrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}

---

##### `IncludeMetrics`<sup>Optional</sup> <a name="IncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics"></a>

```go
IncludeMetrics interface{}
```

- *Type:* interface{}

An array that defines the metrics that are to have additional statistics streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_metrics CloudwatchMetricStream#include_metrics}

---

### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics {
	MetricName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of the metric. |

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamTags <a name="CloudwatchMetricStreamTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key">Key</a></code> | <code>*string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value">Value</a></code> | <code>*string</code> | String which you can use to describe or define the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#key CloudwatchMetricStream#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

String which you can use to describe or define the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#value CloudwatchMetricStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFiltersList <a name="CloudwatchMetricStreamExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamExcludeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamExcludeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamExcludeFiltersOutputReference <a name="CloudwatchMetricStreamExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamExcludeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamExcludeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames"></a>

```go
func ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput"></a>

```go
func MetricNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames"></a>

```go
func MetricNames() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamIncludeFiltersList <a name="CloudwatchMetricStreamIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamIncludeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamIncludeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamIncludeFiltersOutputReference <a name="CloudwatchMetricStreamIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamIncludeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamIncludeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames"></a>

```go
func ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput"></a>

```go
func MetricNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames"></a>

```go
func MetricNames() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationsList <a name="CloudwatchMetricStreamStatisticsConfigurationsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamStatisticsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamStatisticsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics">PutIncludeMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics">ResetAdditionalStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics">ResetIncludeMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeMetrics` <a name="PutIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics"></a>

```go
func PutIncludeMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalStatistics` <a name="ResetAdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics"></a>

```go
func ResetAdditionalStatistics()
```

##### `ResetIncludeMetrics` <a name="ResetIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics"></a>

```go
func ResetIncludeMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics">IncludeMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput">AdditionalStatisticsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput">IncludeMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics">AdditionalStatistics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeMetrics`<sup>Required</sup> <a name="IncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics"></a>

```go
func IncludeMetrics() CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a>

---

##### `AdditionalStatisticsInput`<sup>Optional</sup> <a name="AdditionalStatisticsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput"></a>

```go
func AdditionalStatisticsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeMetricsInput`<sup>Optional</sup> <a name="IncludeMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput"></a>

```go
func IncludeMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalStatistics`<sup>Required</sup> <a name="AdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics"></a>

```go
func AdditionalStatistics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamTagsList <a name="CloudwatchMetricStreamTagsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamTagsOutputReference <a name="CloudwatchMetricStreamTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



