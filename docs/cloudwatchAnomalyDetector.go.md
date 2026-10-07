# `cloudwatchAnomalyDetector` Submodule <a name="`cloudwatchAnomalyDetector` Submodule" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAnomalyDetector <a name="CloudwatchAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetector(scope Construct, id *string, config CloudwatchAnomalyDetectorConfig) CloudwatchAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig">CloudwatchAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig">CloudwatchAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics">PutMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector">PutMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector">PutSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics">ResetMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector">ResetMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector">ResetSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat">ResetStat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration"></a>

```go
func PutConfiguration(value CloudwatchAnomalyDetectorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricCharacteristics` <a name="PutMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics"></a>

```go
func PutMetricCharacteristics(value CloudwatchAnomalyDetectorMetricCharacteristics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---

##### `PutMetricMathAnomalyDetector` <a name="PutMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector"></a>

```go
func PutMetricMathAnomalyDetector(value CloudwatchAnomalyDetectorMetricMathAnomalyDetector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---

##### `PutSingleMetricAnomalyDetector` <a name="PutSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector"></a>

```go
func PutSingleMetricAnomalyDetector(value CloudwatchAnomalyDetectorSingleMetricAnomalyDetector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetMetricCharacteristics` <a name="ResetMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics"></a>

```go
func ResetMetricCharacteristics()
```

##### `ResetMetricMathAnomalyDetector` <a name="ResetMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector"></a>

```go
func ResetMetricMathAnomalyDetector()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSingleMetricAnomalyDetector` <a name="ResetSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector"></a>

```go
func ResetSingleMetricAnomalyDetector()
```

##### `ResetStat` <a name="ResetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat"></a>

```go
func ResetStat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.CloudwatchAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.CloudwatchAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.CloudwatchAnomalyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.CloudwatchAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId">AnomalyDetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics">MetricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector">MetricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector">SingleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput">MetricCharacteristicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput">MetricMathAnomalyDetectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput">SingleMetricAnomalyDetectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput">StatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalyDetectorId`<sup>Required</sup> <a name="AnomalyDetectorId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId"></a>

```go
func AnomalyDetectorId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration"></a>

```go
func Configuration() CloudwatchAnomalyDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions"></a>

```go
func Dimensions() CloudwatchAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricCharacteristics`<sup>Required</sup> <a name="MetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics"></a>

```go
func MetricCharacteristics() CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a>

---

##### `MetricMathAnomalyDetector`<sup>Required</sup> <a name="MetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector"></a>

```go
func MetricMathAnomalyDetector() CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a>

---

##### `SingleMetricAnomalyDetector`<sup>Required</sup> <a name="SingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector"></a>

```go
func SingleMetricAnomalyDetector() CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricCharacteristicsInput`<sup>Optional</sup> <a name="MetricCharacteristicsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput"></a>

```go
func MetricCharacteristicsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricMathAnomalyDetectorInput`<sup>Optional</sup> <a name="MetricMathAnomalyDetectorInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput"></a>

```go
func MetricMathAnomalyDetectorInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SingleMetricAnomalyDetectorInput`<sup>Optional</sup> <a name="SingleMetricAnomalyDetectorInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput"></a>

```go
func SingleMetricAnomalyDetectorInput() interface{}
```

- *Type:* interface{}

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput"></a>

```go
func StatInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAnomalyDetectorConfig <a name="CloudwatchAnomalyDetectorConfig" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration,
	Dimensions: interface{},
	MetricCharacteristics: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics,
	MetricMathAnomalyDetector: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector,
	MetricName: *string,
	Namespace: *string,
	SingleMetricAnomalyDetector: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector,
	Stat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics">MetricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector">MetricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector">SingleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat">Stat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration"></a>

```go
Configuration CloudwatchAnomalyDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `MetricCharacteristics`<sup>Optional</sup> <a name="MetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics"></a>

```go
MetricCharacteristics CloudwatchAnomalyDetectorMetricCharacteristics
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}.

---

##### `MetricMathAnomalyDetector`<sup>Optional</sup> <a name="MetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector"></a>

```go
MetricMathAnomalyDetector CloudwatchAnomalyDetectorMetricMathAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `SingleMetricAnomalyDetector`<sup>Optional</sup> <a name="SingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector"></a>

```go
SingleMetricAnomalyDetector CloudwatchAnomalyDetectorSingleMetricAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}.

---

##### `Stat`<sup>Optional</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat"></a>

```go
Stat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorConfiguration <a name="CloudwatchAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorConfiguration {
	ExcludedTimeRanges: interface{},
	MetricTimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges">ExcludedTimeRanges</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone">MetricTimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}. |

---

##### `ExcludedTimeRanges`<sup>Optional</sup> <a name="ExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges"></a>

```go
ExcludedTimeRanges interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}.

---

##### `MetricTimeZone`<sup>Optional</sup> <a name="MetricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone"></a>

```go
MetricTimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}.

---

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}.

---

### CloudwatchAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorMetricCharacteristics <a name="CloudwatchAnomalyDetectorMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricCharacteristics {
	PeriodicSpikes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes">PeriodicSpikes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}. |

---

##### `PeriodicSpikes`<sup>Optional</sup> <a name="PeriodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes"></a>

```go
PeriodicSpikes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetector <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector {
	MetricDataQueries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries">MetricDataQueries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}. |

---

##### `MetricDataQueries`<sup>Optional</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries"></a>

```go
MetricDataQueries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries {
	AccountId: *string,
	Expression: *string,
	Id: *string,
	Label: *string,
	MetricStat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat,
	Period: *f64,
	ReturnData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData">ReturnData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}.

---

##### `MetricStat`<sup>Optional</sup> <a name="MetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat"></a>

```go
MetricStat CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `ReturnData`<sup>Optional</sup> <a name="ReturnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData"></a>

```go
ReturnData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat {
	Metric: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric,
	Period: *f64,
	Stat: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat">Stat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}. |

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric"></a>

```go
Metric CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `Stat`<sup>Optional</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat"></a>

```go
Stat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric {
	Dimensions: interface{},
	MetricName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetector <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector {
	AccountId: *string,
	Dimensions: interface{},
	MetricName: *string,
	Namespace: *string,
	Stat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat">Stat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `Stat`<sup>Optional</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat"></a>

```go
Stat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

&cloudwatchanomalydetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get"></a>

```go
func Get(index *f64) CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorConfigurationOutputReference <a name="CloudwatchAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges">PutExcludedTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges">ResetExcludedTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone">ResetMetricTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedTimeRanges` <a name="PutExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges"></a>

```go
func PutExcludedTimeRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludedTimeRanges` <a name="ResetExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges"></a>

```go
func ResetExcludedTimeRanges()
```

##### `ResetMetricTimeZone` <a name="ResetMetricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone"></a>

```go
func ResetMetricTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges">ExcludedTimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput">ExcludedTimeRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput">MetricTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone">MetricTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedTimeRanges`<sup>Required</sup> <a name="ExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges"></a>

```go
func ExcludedTimeRanges() CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a>

---

##### `ExcludedTimeRangesInput`<sup>Optional</sup> <a name="ExcludedTimeRangesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput"></a>

```go
func ExcludedTimeRangesInput() interface{}
```

- *Type:* interface{}

---

##### `MetricTimeZoneInput`<sup>Optional</sup> <a name="MetricTimeZoneInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput"></a>

```go
func MetricTimeZoneInput() *string
```

- *Type:* *string

---

##### `MetricTimeZone`<sup>Required</sup> <a name="MetricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone"></a>

```go
func MetricTimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAnomalyDetectorDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get"></a>

```go
func Get(index *f64) CloudwatchAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAnomalyDetectorDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference <a name="CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes">ResetPeriodicSpikes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodicSpikes` <a name="ResetPeriodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes"></a>

```go
func ResetPeriodicSpikes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput">PeriodicSpikesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes">PeriodicSpikes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodicSpikesInput`<sup>Optional</sup> <a name="PeriodicSpikesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput"></a>

```go
func PeriodicSpikesInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodicSpikes`<sup>Required</sup> <a name="PeriodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes"></a>

```go
func PeriodicSpikes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get"></a>

```go
func Get(index *f64) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat">ResetStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```go
func PutMetric(value CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetStat` <a name="ResetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```go
func ResetStat()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput">StatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```go
func StatInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat">PutMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat">ResetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData">ResetReturnData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricStat` <a name="PutMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat"></a>

```go
func PutMetricStat(value CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetMetricStat` <a name="ResetMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat"></a>

```go
func ResetMetricStat()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetReturnData` <a name="ResetReturnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData"></a>

```go
func ResetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput">MetricStatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput">ReturnDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `MetricStatInput`<sup>Optional</sup> <a name="MetricStatInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput"></a>

```go
func MetricStatInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `ReturnDataInput`<sup>Optional</sup> <a name="ReturnDataInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput"></a>

```go
func ReturnDataInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries">PutMetricDataQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries">ResetMetricDataQueries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDataQueries` <a name="PutMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries"></a>

```go
func PutMetricDataQueries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMetricDataQueries` <a name="ResetMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries"></a>

```go
func ResetMetricDataQueries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput">MetricDataQueriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a>

---

##### `MetricDataQueriesInput`<sup>Optional</sup> <a name="MetricDataQueriesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput"></a>

```go
func MetricDataQueriesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get"></a>

```go
func Get(index *f64) CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchanomalydetector"

cloudwatchanomalydetector.NewCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat">ResetStat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetStat` <a name="ResetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat"></a>

```go
func ResetStat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput">StatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions"></a>

```go
func Dimensions() CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput"></a>

```go
func StatInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



