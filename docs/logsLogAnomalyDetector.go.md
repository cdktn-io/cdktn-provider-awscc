# `logsLogAnomalyDetector` Submodule <a name="`logsLogAnomalyDetector` Submodule" id="@cdktn/provider-awscc.logsLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsLogAnomalyDetector <a name="LogsLogAnomalyDetector" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

logsloganomalydetector.NewLogsLogAnomalyDetector(scope Construct, id *string, config LogsLogAnomalyDetectorConfig) LogsLogAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime">ResetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName">ResetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency">ResetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern">ResetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList">ResetLogGroupArnList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAnomalyVisibilityTime` <a name="ResetAnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```go
func ResetAnomalyVisibilityTime()
```

##### `ResetDetectorName` <a name="ResetDetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName"></a>

```go
func ResetDetectorName()
```

##### `ResetEvaluationFrequency` <a name="ResetEvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency"></a>

```go
func ResetEvaluationFrequency()
```

##### `ResetFilterPattern` <a name="ResetFilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern"></a>

```go
func ResetFilterPattern()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogGroupArnList` <a name="ResetLogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList"></a>

```go
func ResetLogGroupArnList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

logsloganomalydetector.LogsLogAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

logsloganomalydetector.LogsLogAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

logsloganomalydetector.LogsLogAnomalyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

logsloganomalydetector.LogsLogAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogsLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogsLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LogsLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn">AnomalyDetectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus">AnomalyDetectorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp">CreationTimeStamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp">LastModifiedTimeStamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput">AnomalyVisibilityTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput">DetectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput">EvaluationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput">FilterPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput">LogGroupArnListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName">DetectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList">LogGroupArnList</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalyDetectorArn`<sup>Required</sup> <a name="AnomalyDetectorArn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn"></a>

```go
func AnomalyDetectorArn() *string
```

- *Type:* *string

---

##### `AnomalyDetectorStatus`<sup>Required</sup> <a name="AnomalyDetectorStatus" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus"></a>

```go
func AnomalyDetectorStatus() *string
```

- *Type:* *string

---

##### `CreationTimeStamp`<sup>Required</sup> <a name="CreationTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp"></a>

```go
func CreationTimeStamp() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTimeStamp`<sup>Required</sup> <a name="LastModifiedTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp"></a>

```go
func LastModifiedTimeStamp() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AnomalyVisibilityTimeInput`<sup>Optional</sup> <a name="AnomalyVisibilityTimeInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```go
func AnomalyVisibilityTimeInput() *f64
```

- *Type:* *f64

---

##### `DetectorNameInput`<sup>Optional</sup> <a name="DetectorNameInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput"></a>

```go
func DetectorNameInput() *string
```

- *Type:* *string

---

##### `EvaluationFrequencyInput`<sup>Optional</sup> <a name="EvaluationFrequencyInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```go
func EvaluationFrequencyInput() *string
```

- *Type:* *string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput"></a>

```go
func FilterPatternInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogGroupArnListInput`<sup>Optional</sup> <a name="LogGroupArnListInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput"></a>

```go
func LogGroupArnListInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AnomalyVisibilityTime`<sup>Required</sup> <a name="AnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```go
func AnomalyVisibilityTime() *f64
```

- *Type:* *f64

---

##### `DetectorName`<sup>Required</sup> <a name="DetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName"></a>

```go
func DetectorName() *string
```

- *Type:* *string

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency"></a>

```go
func EvaluationFrequency() *string
```

- *Type:* *string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogGroupArnList`<sup>Required</sup> <a name="LogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList"></a>

```go
func LogGroupArnList() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsLogAnomalyDetectorConfig <a name="LogsLogAnomalyDetectorConfig" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsloganomalydetector"

&logsloganomalydetector.LogsLogAnomalyDetectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AnomalyVisibilityTime: *f64,
	DetectorName: *string,
	EvaluationFrequency: *string,
	FilterPattern: *string,
	KmsKeyId: *string,
	LogGroupArnList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName">DetectorName</a></code> | <code>*string</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList">LogGroupArnList</a></code> | <code>*[]*string</code> | List of Arns for the given log group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `AnomalyVisibilityTime`<sup>Optional</sup> <a name="AnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```go
AnomalyVisibilityTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `DetectorName`<sup>Optional</sup> <a name="DetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName"></a>

```go
DetectorName *string
```

- *Type:* *string

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `EvaluationFrequency`<sup>Optional</sup> <a name="EvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```go
EvaluationFrequency *string
```

- *Type:* *string

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `FilterPattern`<sup>Optional</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern"></a>

```go
FilterPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `LogGroupArnList`<sup>Optional</sup> <a name="LogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```go
LogGroupArnList *[]*string
```

- *Type:* *[]*string

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---



