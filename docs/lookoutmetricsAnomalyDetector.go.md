# `lookoutmetricsAnomalyDetector` Submodule <a name="`lookoutmetricsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAnomalyDetector <a name="LookoutmetricsAnomalyDetector" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetector(scope Construct, id *string, config LookoutmetricsAnomalyDetectorConfig) LookoutmetricsAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig">PutAnomalyDetectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList">PutMetricSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription">ResetAnomalyDetectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName">ResetAnomalyDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnomalyDetectorConfig` <a name="PutAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig"></a>

```go
func PutAnomalyDetectorConfig(value LookoutmetricsAnomalyDetectorAnomalyDetectorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---

##### `PutMetricSetList` <a name="PutMetricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList"></a>

```go
func PutMetricSetList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnomalyDetectorDescription` <a name="ResetAnomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription"></a>

```go
func ResetAnomalyDetectorDescription()
```

##### `ResetAnomalyDetectorName` <a name="ResetAnomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName"></a>

```go
func ResetAnomalyDetectorName()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LookoutmetricsAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LookoutmetricsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig">AnomalyDetectorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList">MetricSetList</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput">AnomalyDetectorConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput">AnomalyDetectorDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput">AnomalyDetectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput">MetricSetListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription">AnomalyDetectorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName">AnomalyDetectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalyDetectorConfig`<sup>Required</sup> <a name="AnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig"></a>

```go
func AnomalyDetectorConfig() LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricSetList`<sup>Required</sup> <a name="MetricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList"></a>

```go
func MetricSetList() LookoutmetricsAnomalyDetectorMetricSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a>

---

##### `AnomalyDetectorConfigInput`<sup>Optional</sup> <a name="AnomalyDetectorConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput"></a>

```go
func AnomalyDetectorConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AnomalyDetectorDescriptionInput`<sup>Optional</sup> <a name="AnomalyDetectorDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput"></a>

```go
func AnomalyDetectorDescriptionInput() *string
```

- *Type:* *string

---

##### `AnomalyDetectorNameInput`<sup>Optional</sup> <a name="AnomalyDetectorNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput"></a>

```go
func AnomalyDetectorNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MetricSetListInput`<sup>Optional</sup> <a name="MetricSetListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput"></a>

```go
func MetricSetListInput() interface{}
```

- *Type:* interface{}

---

##### `AnomalyDetectorDescription`<sup>Required</sup> <a name="AnomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription"></a>

```go
func AnomalyDetectorDescription() *string
```

- *Type:* *string

---

##### `AnomalyDetectorName`<sup>Required</sup> <a name="AnomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName"></a>

```go
func AnomalyDetectorName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig {
	AnomalyDetectorFrequency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency">AnomalyDetectorFrequency</a></code> | <code>*string</code> | Frequency of anomaly detection. |

---

##### `AnomalyDetectorFrequency`<sup>Required</sup> <a name="AnomalyDetectorFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency"></a>

```go
AnomalyDetectorFrequency *string
```

- *Type:* *string

Frequency of anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_frequency LookoutmetricsAnomalyDetector#anomaly_detector_frequency}

---

### LookoutmetricsAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AnomalyDetectorConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig,
	MetricSetList: interface{},
	AnomalyDetectorDescription: *string,
	AnomalyDetectorName: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig">AnomalyDetectorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | Configuration options for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList">MetricSetList</a></code> | <code>interface{}</code> | List of metric sets for anomaly detection. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription">AnomalyDetectorDescription</a></code> | <code>*string</code> | A description for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName">AnomalyDetectorName</a></code> | <code>*string</code> | Name for the Amazon Lookout for Metrics Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS key used to encrypt the AnomalyDetector data. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalyDetectorConfig`<sup>Required</sup> <a name="AnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig"></a>

```go
AnomalyDetectorConfig LookoutmetricsAnomalyDetectorAnomalyDetectorConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

Configuration options for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_config LookoutmetricsAnomalyDetector#anomaly_detector_config}

---

##### `MetricSetList`<sup>Required</sup> <a name="MetricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList"></a>

```go
MetricSetList interface{}
```

- *Type:* interface{}

List of metric sets for anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_list LookoutmetricsAnomalyDetector#metric_set_list}

---

##### `AnomalyDetectorDescription`<sup>Optional</sup> <a name="AnomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription"></a>

```go
AnomalyDetectorDescription *string
```

- *Type:* *string

A description for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_description LookoutmetricsAnomalyDetector#anomaly_detector_description}

---

##### `AnomalyDetectorName`<sup>Optional</sup> <a name="AnomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName"></a>

```go
AnomalyDetectorName *string
```

- *Type:* *string

Name for the Amazon Lookout for Metrics Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_name LookoutmetricsAnomalyDetector#anomaly_detector_name}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS key used to encrypt the AnomalyDetector data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#kms_key_arn LookoutmetricsAnomalyDetector#kms_key_arn}

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct {
	AggregationFunction: *string,
	MetricName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction">AggregationFunction</a></code> | <code>*string</code> | Operator used to aggregate metric values. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName">MetricName</a></code> | <code>*string</code> | Name of a column in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}. |

---

##### `AggregationFunction`<sup>Required</sup> <a name="AggregationFunction" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction"></a>

```go
AggregationFunction *string
```

- *Type:* *string

Operator used to aggregate metric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#aggregation_function LookoutmetricsAnomalyDetector#aggregation_function}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_name LookoutmetricsAnomalyDetector#metric_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSource <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource {
	AppFlowConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig,
	CloudwatchConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig,
	RdsSourceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig,
	RedshiftSourceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig,
	S3SourceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig">AppFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig">RdsSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig">RedshiftSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig">S3SourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}. |

---

##### `AppFlowConfig`<sup>Optional</sup> <a name="AppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig"></a>

```go
AppFlowConfig LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}.

---

##### `CloudwatchConfig`<sup>Optional</sup> <a name="CloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig"></a>

```go
CloudwatchConfig LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}.

---

##### `RdsSourceConfig`<sup>Optional</sup> <a name="RdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig"></a>

```go
RdsSourceConfig LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}.

---

##### `RedshiftSourceConfig`<sup>Optional</sup> <a name="RedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig"></a>

```go
RedshiftSourceConfig LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}.

---

##### `S3SourceConfig`<sup>Optional</sup> <a name="S3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig"></a>

```go
S3SourceConfig LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig {
	FlowName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName">FlowName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `FlowName`<sup>Optional</sup> <a name="FlowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName"></a>

```go
FlowName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig {
	DatabaseHost: *string,
	DatabaseName: *string,
	DatabasePort: *f64,
	DbInstanceIdentifier: *string,
	RoleArn: *string,
	SecretManagerArn: *string,
	TableName: *string,
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost">DatabaseHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort">DatabasePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `DatabaseHost`<sup>Optional</sup> <a name="DatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost"></a>

```go
DatabaseHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `DatabasePort`<sup>Optional</sup> <a name="DatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort"></a>

```go
DatabasePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `DbInstanceIdentifier`<sup>Optional</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier"></a>

```go
DbInstanceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `SecretManagerArn`<sup>Optional</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn"></a>

```go
SecretManagerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration"></a>

```go
VpcConfiguration LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration {
	SecurityGroupIdList: *[]*string,
	SubnetIdList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList">SubnetIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```go
SecurityGroupIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `SubnetIdList`<sup>Optional</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList"></a>

```go
SubnetIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig {
	ClusterIdentifier: *string,
	DatabaseHost: *string,
	DatabaseName: *string,
	DatabasePort: *f64,
	RoleArn: *string,
	SecretManagerArn: *string,
	TableName: *string,
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost">DatabaseHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort">DatabasePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}.

---

##### `DatabaseHost`<sup>Optional</sup> <a name="DatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost"></a>

```go
DatabaseHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `DatabasePort`<sup>Optional</sup> <a name="DatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort"></a>

```go
DatabasePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `SecretManagerArn`<sup>Optional</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn"></a>

```go
SecretManagerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration"></a>

```go
VpcConfiguration LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration {
	SecurityGroupIdList: *[]*string,
	SubnetIdList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList">SubnetIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```go
SecurityGroupIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `SubnetIdList`<sup>Optional</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList"></a>

```go
SubnetIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig {
	FileFormatDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor,
	HistoricalDataPathList: *[]*string,
	RoleArn: *string,
	TemplatedPathList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor">FileFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList">HistoricalDataPathList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList">TemplatedPathList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}. |

---

##### `FileFormatDescriptor`<sup>Optional</sup> <a name="FileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor"></a>

```go
FileFormatDescriptor LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}.

---

##### `HistoricalDataPathList`<sup>Optional</sup> <a name="HistoricalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList"></a>

```go
HistoricalDataPathList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `TemplatedPathList`<sup>Optional</sup> <a name="TemplatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList"></a>

```go
TemplatedPathList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor {
	CsvFormatDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor,
	JsonFormatDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor">CsvFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor">JsonFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}. |

---

##### `CsvFormatDescriptor`<sup>Optional</sup> <a name="CsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor"></a>

```go
CsvFormatDescriptor LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}.

---

##### `JsonFormatDescriptor`<sup>Optional</sup> <a name="JsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor"></a>

```go
JsonFormatDescriptor LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor {
	Charset: *string,
	ContainsHeader: interface{},
	Delimiter: *string,
	FileCompression: *string,
	HeaderList: *[]*string,
	QuoteSymbol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset">Charset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader">ContainsHeader</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression">FileCompression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}. |

---

##### `Charset`<sup>Optional</sup> <a name="Charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset"></a>

```go
Charset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader"></a>

```go
ContainsHeader interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}.

---

##### `FileCompression`<sup>Optional</sup> <a name="FileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression"></a>

```go
FileCompression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

##### `HeaderList`<sup>Optional</sup> <a name="HeaderList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList"></a>

```go
HeaderList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}.

---

##### `QuoteSymbol`<sup>Optional</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol"></a>

```go
QuoteSymbol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor {
	Charset: *string,
	FileCompression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset">Charset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression">FileCompression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |

---

##### `Charset`<sup>Optional</sup> <a name="Charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset"></a>

```go
Charset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `FileCompression`<sup>Optional</sup> <a name="FileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression"></a>

```go
FileCompression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

### LookoutmetricsAnomalyDetectorMetricSetListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListStruct {
	MetricList: interface{},
	MetricSetName: *string,
	MetricSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource,
	DimensionList: *[]*string,
	MetricSetDescription: *string,
	MetricSetFrequency: *string,
	Offset: *f64,
	TimestampColumn: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList">MetricList</a></code> | <code>interface{}</code> | Metrics captured by this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName">MetricSetName</a></code> | <code>*string</code> | The name of the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource">MetricSource</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList">DimensionList</a></code> | <code>*[]*string</code> | Dimensions for this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription">MetricSetDescription</a></code> | <code>*string</code> | A description for the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency">MetricSetFrequency</a></code> | <code>*string</code> | A frequency period to aggregate the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset">Offset</a></code> | <code>*f64</code> | Offset, in seconds, between the frequency interval and the time at which the metrics are available. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn">TimestampColumn</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}. |

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList"></a>

```go
MetricList interface{}
```

- *Type:* interface{}

Metrics captured by this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_list LookoutmetricsAnomalyDetector#metric_list}

---

##### `MetricSetName`<sup>Required</sup> <a name="MetricSetName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName"></a>

```go
MetricSetName *string
```

- *Type:* *string

The name of the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_name LookoutmetricsAnomalyDetector#metric_set_name}

---

##### `MetricSource`<sup>Required</sup> <a name="MetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource"></a>

```go
MetricSource LookoutmetricsAnomalyDetectorMetricSetListMetricSource
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}.

---

##### `DimensionList`<sup>Optional</sup> <a name="DimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList"></a>

```go
DimensionList *[]*string
```

- *Type:* *[]*string

Dimensions for this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#dimension_list LookoutmetricsAnomalyDetector#dimension_list}

---

##### `MetricSetDescription`<sup>Optional</sup> <a name="MetricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription"></a>

```go
MetricSetDescription *string
```

- *Type:* *string

A description for the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_description LookoutmetricsAnomalyDetector#metric_set_description}

---

##### `MetricSetFrequency`<sup>Optional</sup> <a name="MetricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency"></a>

```go
MetricSetFrequency *string
```

- *Type:* *string

A frequency period to aggregate the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_frequency LookoutmetricsAnomalyDetector#metric_set_frequency}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset, in seconds, between the frequency interval and the time at which the metrics are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#offset LookoutmetricsAnomalyDetector#offset}

---

##### `TimestampColumn`<sup>Optional</sup> <a name="TimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn"></a>

```go
TimestampColumn LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}.

---

### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

&lookoutmetricsanomalydetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn {
	ColumnFormat: *string,
	ColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat">ColumnFormat</a></code> | <code>*string</code> | A timestamp format for the timestamps in the dataset. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName">ColumnName</a></code> | <code>*string</code> | Name of a column in the data. |

---

##### `ColumnFormat`<sup>Optional</sup> <a name="ColumnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat"></a>

```go
ColumnFormat *string
```

- *Type:* *string

A timestamp format for the timestamps in the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#column_format LookoutmetricsAnomalyDetector#column_format}

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#column_name LookoutmetricsAnomalyDetector#column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput">AnomalyDetectorFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency">AnomalyDetectorFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnomalyDetectorFrequencyInput`<sup>Optional</sup> <a name="AnomalyDetectorFrequencyInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput"></a>

```go
func AnomalyDetectorFrequencyInput() *string
```

- *Type:* *string

---

##### `AnomalyDetectorFrequency`<sup>Required</sup> <a name="AnomalyDetectorFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency"></a>

```go
func AnomalyDetectorFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get"></a>

```go
func Get(index *f64) LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput">AggregationFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction">AggregationFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationFunctionInput`<sup>Optional</sup> <a name="AggregationFunctionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput"></a>

```go
func AggregationFunctionInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AggregationFunction`<sup>Required</sup> <a name="AggregationFunction" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction"></a>

```go
func AggregationFunction() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName">ResetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowName` <a name="ResetFlowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName"></a>

```go
func ResetFlowName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput">FlowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName">FlowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowNameInput`<sup>Optional</sup> <a name="FlowNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput"></a>

```go
func FlowNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `FlowName`<sup>Required</sup> <a name="FlowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName"></a>

```go
func FlowName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig">PutAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig">PutCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig">PutRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig">PutRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig">PutS3SourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig">ResetAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig">ResetCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig">ResetRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig">ResetRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig">ResetS3SourceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppFlowConfig` <a name="PutAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig"></a>

```go
func PutAppFlowConfig(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---

##### `PutCloudwatchConfig` <a name="PutCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig"></a>

```go
func PutCloudwatchConfig(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---

##### `PutRdsSourceConfig` <a name="PutRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig"></a>

```go
func PutRdsSourceConfig(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---

##### `PutRedshiftSourceConfig` <a name="PutRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig"></a>

```go
func PutRedshiftSourceConfig(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---

##### `PutS3SourceConfig` <a name="PutS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig"></a>

```go
func PutS3SourceConfig(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---

##### `ResetAppFlowConfig` <a name="ResetAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig"></a>

```go
func ResetAppFlowConfig()
```

##### `ResetCloudwatchConfig` <a name="ResetCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig"></a>

```go
func ResetCloudwatchConfig()
```

##### `ResetRdsSourceConfig` <a name="ResetRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig"></a>

```go
func ResetRdsSourceConfig()
```

##### `ResetRedshiftSourceConfig` <a name="ResetRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig"></a>

```go
func ResetRedshiftSourceConfig()
```

##### `ResetS3SourceConfig` <a name="ResetS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig"></a>

```go
func ResetS3SourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig">AppFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig">RdsSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig">RedshiftSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig">S3SourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput">AppFlowConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput">CloudwatchConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput">RdsSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput">RedshiftSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput">S3SourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppFlowConfig`<sup>Required</sup> <a name="AppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig"></a>

```go
func AppFlowConfig() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a>

---

##### `CloudwatchConfig`<sup>Required</sup> <a name="CloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig"></a>

```go
func CloudwatchConfig() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a>

---

##### `RdsSourceConfig`<sup>Required</sup> <a name="RdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig"></a>

```go
func RdsSourceConfig() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a>

---

##### `RedshiftSourceConfig`<sup>Required</sup> <a name="RedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig"></a>

```go
func RedshiftSourceConfig() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a>

---

##### `S3SourceConfig`<sup>Required</sup> <a name="S3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig"></a>

```go
func S3SourceConfig() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a>

---

##### `AppFlowConfigInput`<sup>Optional</sup> <a name="AppFlowConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput"></a>

```go
func AppFlowConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchConfigInput`<sup>Optional</sup> <a name="CloudwatchConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput"></a>

```go
func CloudwatchConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RdsSourceConfigInput`<sup>Optional</sup> <a name="RdsSourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput"></a>

```go
func RdsSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftSourceConfigInput`<sup>Optional</sup> <a name="RedshiftSourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput"></a>

```go
func RedshiftSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3SourceConfigInput`<sup>Optional</sup> <a name="S3SourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput"></a>

```go
func S3SourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost">ResetDatabaseHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort">ResetDatabasePort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier">ResetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn">ResetSecretManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---

##### `ResetDatabaseHost` <a name="ResetDatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost"></a>

```go
func ResetDatabaseHost()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDatabasePort` <a name="ResetDatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort"></a>

```go
func ResetDatabasePort()
```

##### `ResetDbInstanceIdentifier` <a name="ResetDbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier"></a>

```go
func ResetDbInstanceIdentifier()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretManagerArn` <a name="ResetSecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn"></a>

```go
func ResetSecretManagerArn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput">DatabaseHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput">DatabasePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput">DbInstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput">SecretManagerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost">DatabaseHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort">DatabasePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a>

---

##### `DatabaseHostInput`<sup>Optional</sup> <a name="DatabaseHostInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput"></a>

```go
func DatabaseHostInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabasePortInput`<sup>Optional</sup> <a name="DatabasePortInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput"></a>

```go
func DatabasePortInput() *f64
```

- *Type:* *f64

---

##### `DbInstanceIdentifierInput`<sup>Optional</sup> <a name="DbInstanceIdentifierInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput"></a>

```go
func DbInstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretManagerArnInput`<sup>Optional</sup> <a name="SecretManagerArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput"></a>

```go
func SecretManagerArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseHost`<sup>Required</sup> <a name="DatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost"></a>

```go
func DatabaseHost() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabasePort`<sup>Required</sup> <a name="DatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort"></a>

```go
func DatabasePort() *f64
```

- *Type:* *f64

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier"></a>

```go
func DbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn"></a>

```go
func SecretManagerArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">ResetSubnetIdList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```go
func ResetSecurityGroupIdList()
```

##### `ResetSubnetIdList` <a name="ResetSubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```go
func ResetSubnetIdList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">SubnetIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList">SubnetIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```go
func SecurityGroupIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdListInput`<sup>Optional</sup> <a name="SubnetIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```go
func SubnetIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```go
func SecurityGroupIdList() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdList`<sup>Required</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```go
func SubnetIdList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost">ResetDatabaseHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort">ResetDatabasePort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn">ResetSecretManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetDatabaseHost` <a name="ResetDatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost"></a>

```go
func ResetDatabaseHost()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDatabasePort` <a name="ResetDatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort"></a>

```go
func ResetDatabasePort()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretManagerArn` <a name="ResetSecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn"></a>

```go
func ResetSecretManagerArn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput">DatabaseHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput">DatabasePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput">SecretManagerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost">DatabaseHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort">DatabasePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a>

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `DatabaseHostInput`<sup>Optional</sup> <a name="DatabaseHostInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput"></a>

```go
func DatabaseHostInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabasePortInput`<sup>Optional</sup> <a name="DatabasePortInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput"></a>

```go
func DatabasePortInput() *f64
```

- *Type:* *f64

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretManagerArnInput`<sup>Optional</sup> <a name="SecretManagerArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput"></a>

```go
func SecretManagerArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `DatabaseHost`<sup>Required</sup> <a name="DatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost"></a>

```go
func DatabaseHost() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabasePort`<sup>Required</sup> <a name="DatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort"></a>

```go
func DatabasePort() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn"></a>

```go
func SecretManagerArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">ResetSubnetIdList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```go
func ResetSecurityGroupIdList()
```

##### `ResetSubnetIdList` <a name="ResetSubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```go
func ResetSubnetIdList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">SubnetIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList">SubnetIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```go
func SecurityGroupIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdListInput`<sup>Optional</sup> <a name="SubnetIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```go
func SubnetIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```go
func SecurityGroupIdList() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdList`<sup>Required</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```go
func SubnetIdList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset">ResetCharset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression">ResetFileCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList">ResetHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol">ResetQuoteSymbol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCharset` <a name="ResetCharset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset"></a>

```go
func ResetCharset()
```

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader"></a>

```go
func ResetContainsHeader()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetFileCompression` <a name="ResetFileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression"></a>

```go
func ResetFileCompression()
```

##### `ResetHeaderList` <a name="ResetHeaderList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList"></a>

```go
func ResetHeaderList()
```

##### `ResetQuoteSymbol` <a name="ResetQuoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol"></a>

```go
func ResetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput">CharsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput">FileCompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput">HeaderListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput">QuoteSymbolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset">Charset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression">FileCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CharsetInput`<sup>Optional</sup> <a name="CharsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput"></a>

```go
func CharsetInput() *string
```

- *Type:* *string

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput"></a>

```go
func ContainsHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `FileCompressionInput`<sup>Optional</sup> <a name="FileCompressionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```go
func FileCompressionInput() *string
```

- *Type:* *string

---

##### `HeaderListInput`<sup>Optional</sup> <a name="HeaderListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput"></a>

```go
func HeaderListInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuoteSymbolInput`<sup>Optional</sup> <a name="QuoteSymbolInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput"></a>

```go
func QuoteSymbolInput() *string
```

- *Type:* *string

---

##### `Charset`<sup>Required</sup> <a name="Charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset"></a>

```go
func Charset() *string
```

- *Type:* *string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader"></a>

```go
func ContainsHeader() interface{}
```

- *Type:* interface{}

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `FileCompression`<sup>Required</sup> <a name="FileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression"></a>

```go
func FileCompression() *string
```

- *Type:* *string

---

##### `HeaderList`<sup>Required</sup> <a name="HeaderList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList"></a>

```go
func HeaderList() *[]*string
```

- *Type:* *[]*string

---

##### `QuoteSymbol`<sup>Required</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol"></a>

```go
func QuoteSymbol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset">ResetCharset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression">ResetFileCompression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCharset` <a name="ResetCharset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset"></a>

```go
func ResetCharset()
```

##### `ResetFileCompression` <a name="ResetFileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression"></a>

```go
func ResetFileCompression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput">CharsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput">FileCompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset">Charset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression">FileCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CharsetInput`<sup>Optional</sup> <a name="CharsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput"></a>

```go
func CharsetInput() *string
```

- *Type:* *string

---

##### `FileCompressionInput`<sup>Optional</sup> <a name="FileCompressionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```go
func FileCompressionInput() *string
```

- *Type:* *string

---

##### `Charset`<sup>Required</sup> <a name="Charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset"></a>

```go
func Charset() *string
```

- *Type:* *string

---

##### `FileCompression`<sup>Required</sup> <a name="FileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression"></a>

```go
func FileCompression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor">PutCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor">PutJsonFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor">ResetCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor">ResetJsonFormatDescriptor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsvFormatDescriptor` <a name="PutCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor"></a>

```go
func PutCsvFormatDescriptor(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---

##### `PutJsonFormatDescriptor` <a name="PutJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor"></a>

```go
func PutJsonFormatDescriptor(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---

##### `ResetCsvFormatDescriptor` <a name="ResetCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor"></a>

```go
func ResetCsvFormatDescriptor()
```

##### `ResetJsonFormatDescriptor` <a name="ResetJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor"></a>

```go
func ResetJsonFormatDescriptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor">CsvFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor">JsonFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput">CsvFormatDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput">JsonFormatDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvFormatDescriptor`<sup>Required</sup> <a name="CsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor"></a>

```go
func CsvFormatDescriptor() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a>

---

##### `JsonFormatDescriptor`<sup>Required</sup> <a name="JsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor"></a>

```go
func JsonFormatDescriptor() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a>

---

##### `CsvFormatDescriptorInput`<sup>Optional</sup> <a name="CsvFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput"></a>

```go
func CsvFormatDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `JsonFormatDescriptorInput`<sup>Optional</sup> <a name="JsonFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput"></a>

```go
func JsonFormatDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor">PutFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor">ResetFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList">ResetHistoricalDataPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList">ResetTemplatedPathList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileFormatDescriptor` <a name="PutFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor"></a>

```go
func PutFileFormatDescriptor(value LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---

##### `ResetFileFormatDescriptor` <a name="ResetFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor"></a>

```go
func ResetFileFormatDescriptor()
```

##### `ResetHistoricalDataPathList` <a name="ResetHistoricalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList"></a>

```go
func ResetHistoricalDataPathList()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTemplatedPathList` <a name="ResetTemplatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList"></a>

```go
func ResetTemplatedPathList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor">FileFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput">FileFormatDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput">HistoricalDataPathListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput">TemplatedPathListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList">HistoricalDataPathList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList">TemplatedPathList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileFormatDescriptor`<sup>Required</sup> <a name="FileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor"></a>

```go
func FileFormatDescriptor() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a>

---

##### `FileFormatDescriptorInput`<sup>Optional</sup> <a name="FileFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput"></a>

```go
func FileFormatDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `HistoricalDataPathListInput`<sup>Optional</sup> <a name="HistoricalDataPathListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput"></a>

```go
func HistoricalDataPathListInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TemplatedPathListInput`<sup>Optional</sup> <a name="TemplatedPathListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput"></a>

```go
func TemplatedPathListInput() *[]*string
```

- *Type:* *[]*string

---

##### `HistoricalDataPathList`<sup>Required</sup> <a name="HistoricalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList"></a>

```go
func HistoricalDataPathList() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TemplatedPathList`<sup>Required</sup> <a name="TemplatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList"></a>

```go
func TemplatedPathList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LookoutmetricsAnomalyDetectorMetricSetListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get"></a>

```go
func Get(index *f64) LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList">PutMetricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource">PutMetricSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn">PutTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList">ResetDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription">ResetMetricSetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency">ResetMetricSetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn">ResetTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricList` <a name="PutMetricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList"></a>

```go
func PutMetricList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricSource` <a name="PutMetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource"></a>

```go
func PutMetricSource(value LookoutmetricsAnomalyDetectorMetricSetListMetricSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---

##### `PutTimestampColumn` <a name="PutTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn"></a>

```go
func PutTimestampColumn(value LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---

##### `ResetDimensionList` <a name="ResetDimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList"></a>

```go
func ResetDimensionList()
```

##### `ResetMetricSetDescription` <a name="ResetMetricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription"></a>

```go
func ResetMetricSetDescription()
```

##### `ResetMetricSetFrequency` <a name="ResetMetricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency"></a>

```go
func ResetMetricSetFrequency()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetTimestampColumn` <a name="ResetTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn"></a>

```go
func ResetTimestampColumn()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList">MetricList</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource">MetricSource</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput">DimensionListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput">MetricListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput">MetricSetDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput">MetricSetFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput">MetricSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput">MetricSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList">DimensionList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription">MetricSetDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency">MetricSetFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName">MetricSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList"></a>

```go
func MetricList() LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a>

---

##### `MetricSource`<sup>Required</sup> <a name="MetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource"></a>

```go
func MetricSource() LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a>

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn"></a>

```go
func TimestampColumn() LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a>

---

##### `DimensionListInput`<sup>Optional</sup> <a name="DimensionListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput"></a>

```go
func DimensionListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricListInput`<sup>Optional</sup> <a name="MetricListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput"></a>

```go
func MetricListInput() interface{}
```

- *Type:* interface{}

---

##### `MetricSetDescriptionInput`<sup>Optional</sup> <a name="MetricSetDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput"></a>

```go
func MetricSetDescriptionInput() *string
```

- *Type:* *string

---

##### `MetricSetFrequencyInput`<sup>Optional</sup> <a name="MetricSetFrequencyInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput"></a>

```go
func MetricSetFrequencyInput() *string
```

- *Type:* *string

---

##### `MetricSetNameInput`<sup>Optional</sup> <a name="MetricSetNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput"></a>

```go
func MetricSetNameInput() *string
```

- *Type:* *string

---

##### `MetricSourceInput`<sup>Optional</sup> <a name="MetricSourceInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput"></a>

```go
func MetricSourceInput() interface{}
```

- *Type:* interface{}

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput"></a>

```go
func TimestampColumnInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `DimensionList`<sup>Required</sup> <a name="DimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList"></a>

```go
func DimensionList() *[]*string
```

- *Type:* *[]*string

---

##### `MetricSetDescription`<sup>Required</sup> <a name="MetricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription"></a>

```go
func MetricSetDescription() *string
```

- *Type:* *string

---

##### `MetricSetFrequency`<sup>Required</sup> <a name="MetricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency"></a>

```go
func MetricSetFrequency() *string
```

- *Type:* *string

---

##### `MetricSetName`<sup>Required</sup> <a name="MetricSetName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName"></a>

```go
func MetricSetName() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lookoutmetricsanomalydetector"

lookoutmetricsanomalydetector.NewLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat">ResetColumnFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnFormat` <a name="ResetColumnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat"></a>

```go
func ResetColumnFormat()
```

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput">ColumnFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat">ColumnFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnFormatInput`<sup>Optional</sup> <a name="ColumnFormatInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput"></a>

```go
func ColumnFormatInput() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnFormat`<sup>Required</sup> <a name="ColumnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat"></a>

```go
func ColumnFormat() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



