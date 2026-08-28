# `apsAnomalyDetector` Submodule <a name="`apsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.apsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsAnomalyDetector <a name="ApsAnomalyDetector" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetector(scope Construct, id *string, config ApsAnomalyDetectorConfig) ApsAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig">ApsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig">ApsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction">PutMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds">ResetEvaluationIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction">ResetMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration"></a>

```go
func PutConfiguration(value ApsAnomalyDetectorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---

##### `PutLabels` <a name="PutLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMissingDataAction` <a name="PutMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction"></a>

```go
func PutMissingDataAction(value ApsAnomalyDetectorMissingDataAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEvaluationIntervalInSeconds` <a name="ResetEvaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds"></a>

```go
func ResetEvaluationIntervalInSeconds()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMissingDataAction` <a name="ResetMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction"></a>

```go
func ResetMissingDataAction()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.ApsAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.ApsAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.ApsAnomalyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.ApsAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApsAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels">Labels</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction">MissingDataAction</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput">EvaluationIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput">MissingDataActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds">EvaluationIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration"></a>

```go
func Configuration() ApsAnomalyDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels"></a>

```go
func Labels() ApsAnomalyDetectorLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a>

---

##### `MissingDataAction`<sup>Required</sup> <a name="MissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction"></a>

```go
func MissingDataAction() ApsAnomalyDetectorMissingDataActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags"></a>

```go
func Tags() ApsAnomalyDetectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationIntervalInSecondsInput`<sup>Optional</sup> <a name="EvaluationIntervalInSecondsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput"></a>

```go
func EvaluationIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `MissingDataActionInput`<sup>Optional</sup> <a name="MissingDataActionInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput"></a>

```go
func MissingDataActionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `EvaluationIntervalInSeconds`<sup>Required</sup> <a name="EvaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```go
func EvaluationIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsAnomalyDetectorConfig <a name="ApsAnomalyDetectorConfig" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Alias: *string,
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration,
	Workspace: *string,
	EvaluationIntervalInSeconds: *f64,
	Labels: interface{},
	MissingDataAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias">Alias</a></code> | <code>*string</code> | The AnomalyDetector alias. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | Determines the anomaly detector's algorithm and its configuration. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace">Workspace</a></code> | <code>*string</code> | Required to identify a specific APS Workspace associated with this Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds">EvaluationIntervalInSeconds</a></code> | <code>*f64</code> | The AnomalyDetector period of detection and metric generation. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels">Labels</a></code> | <code>interface{}</code> | An array of key-value pairs to provide meta-data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction">MissingDataAction</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | The action to perform when running the expression returns no data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

The AnomalyDetector alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#alias ApsAnomalyDetector#alias}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration"></a>

```go
Configuration ApsAnomalyDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

Determines the anomaly detector's algorithm and its configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#configuration ApsAnomalyDetector#configuration}

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

Required to identify a specific APS Workspace associated with this Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#workspace ApsAnomalyDetector#workspace}

---

##### `EvaluationIntervalInSeconds`<sup>Optional</sup> <a name="EvaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds"></a>

```go
EvaluationIntervalInSeconds *f64
```

- *Type:* *f64

The AnomalyDetector period of detection and metric generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds ApsAnomalyDetector#evaluation_interval_in_seconds}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

An array of key-value pairs to provide meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#labels ApsAnomalyDetector#labels}

---

##### `MissingDataAction`<sup>Optional</sup> <a name="MissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction"></a>

```go
MissingDataAction ApsAnomalyDetectorMissingDataAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

The action to perform when running the expression returns no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#missing_data_action ApsAnomalyDetector#missing_data_action}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#tags ApsAnomalyDetector#tags}

---

### ApsAnomalyDetectorConfiguration <a name="ApsAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorConfiguration {
	RandomCutForest: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest">RandomCutForest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}. |

---

##### `RandomCutForest`<sup>Required</sup> <a name="RandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest"></a>

```go
RandomCutForest ApsAnomalyDetectorConfigurationRandomCutForest
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}.

---

### ApsAnomalyDetectorConfigurationRandomCutForest <a name="ApsAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorConfigurationRandomCutForest {
	Query: *string,
	IgnoreNearExpectedFromAbove: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove,
	IgnoreNearExpectedFromBelow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow,
	SampleSize: *f64,
	ShingleSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove">IgnoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow">IgnoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize">ShingleSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}.

---

##### `IgnoreNearExpectedFromAbove`<sup>Optional</sup> <a name="IgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove"></a>

```go
IgnoreNearExpectedFromAbove ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}.

---

##### `IgnoreNearExpectedFromBelow`<sup>Optional</sup> <a name="IgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow"></a>

```go
IgnoreNearExpectedFromBelow ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize"></a>

```go
SampleSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}.

---

##### `ShingleSize`<sup>Optional</sup> <a name="ShingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize"></a>

```go
ShingleSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {
	Amount: *f64,
	Ratio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount">Amount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio">Ratio</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `Ratio`<sup>Optional</sup> <a name="Ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio"></a>

```go
Ratio *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {
	Amount: *f64,
	Ratio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount">Amount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio">Ratio</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `Ratio`<sup>Optional</sup> <a name="Ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio"></a>

```go
Ratio *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorLabels <a name="ApsAnomalyDetectorLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

### ApsAnomalyDetectorMissingDataAction <a name="ApsAnomalyDetectorMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorMissingDataAction {
	MarkAsAnomaly: interface{},
	Skip: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly">MarkAsAnomaly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip">Skip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}. |

---

##### `MarkAsAnomaly`<sup>Optional</sup> <a name="MarkAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly"></a>

```go
MarkAsAnomaly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}.

---

##### `Skip`<sup>Optional</sup> <a name="Skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip"></a>

```go
Skip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}.

---

### ApsAnomalyDetectorTags <a name="ApsAnomalyDetectorTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

&apsanomalydetector.ApsAnomalyDetectorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsAnomalyDetectorConfigurationOutputReference <a name="ApsAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsAnomalyDetectorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest">PutRandomCutForest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRandomCutForest` <a name="PutRandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest"></a>

```go
func PutRandomCutForest(value ApsAnomalyDetectorConfigurationRandomCutForest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest">RandomCutForest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput">RandomCutForestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RandomCutForest`<sup>Required</sup> <a name="RandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```go
func RandomCutForest() ApsAnomalyDetectorConfigurationRandomCutForestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a>

---

##### `RandomCutForestInput`<sup>Optional</sup> <a name="RandomCutForestInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput"></a>

```go
func RandomCutForestInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio">ResetRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmount` <a name="ResetAmount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount"></a>

```go
func ResetAmount()
```

##### `ResetRatio` <a name="ResetRatio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio"></a>

```go
func ResetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput">RatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">Ratio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `RatioInput`<sup>Optional</sup> <a name="RatioInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput"></a>

```go
func RatioInput() *f64
```

- *Type:* *f64

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```go
func Ratio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio">ResetRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmount` <a name="ResetAmount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount"></a>

```go
func ResetAmount()
```

##### `ResetRatio` <a name="ResetRatio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio"></a>

```go
func ResetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput">RatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">Ratio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `RatioInput`<sup>Optional</sup> <a name="RatioInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput"></a>

```go
func RatioInput() *f64
```

- *Type:* *f64

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```go
func Ratio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorConfigurationRandomCutForestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsAnomalyDetectorConfigurationRandomCutForestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove">PutIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow">PutIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove">ResetIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow">ResetIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize">ResetShingleSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIgnoreNearExpectedFromAbove` <a name="PutIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove"></a>

```go
func PutIgnoreNearExpectedFromAbove(value ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---

##### `PutIgnoreNearExpectedFromBelow` <a name="PutIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow"></a>

```go
func PutIgnoreNearExpectedFromBelow(value ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---

##### `ResetIgnoreNearExpectedFromAbove` <a name="ResetIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove"></a>

```go
func ResetIgnoreNearExpectedFromAbove()
```

##### `ResetIgnoreNearExpectedFromBelow` <a name="ResetIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow"></a>

```go
func ResetIgnoreNearExpectedFromBelow()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize"></a>

```go
func ResetSampleSize()
```

##### `ResetShingleSize` <a name="ResetShingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize"></a>

```go
func ResetShingleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">IgnoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">IgnoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput">IgnoreNearExpectedFromAboveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput">IgnoreNearExpectedFromBelowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput">ShingleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">ShingleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreNearExpectedFromAbove`<sup>Required</sup> <a name="IgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```go
func IgnoreNearExpectedFromAbove() ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a>

---

##### `IgnoreNearExpectedFromBelow`<sup>Required</sup> <a name="IgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```go
func IgnoreNearExpectedFromBelow() ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a>

---

##### `IgnoreNearExpectedFromAboveInput`<sup>Optional</sup> <a name="IgnoreNearExpectedFromAboveInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput"></a>

```go
func IgnoreNearExpectedFromAboveInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNearExpectedFromBelowInput`<sup>Optional</sup> <a name="IgnoreNearExpectedFromBelowInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput"></a>

```go
func IgnoreNearExpectedFromBelowInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput"></a>

```go
func SampleSizeInput() *f64
```

- *Type:* *f64

---

##### `ShingleSizeInput`<sup>Optional</sup> <a name="ShingleSizeInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput"></a>

```go
func ShingleSizeInput() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```go
func SampleSize() *f64
```

- *Type:* *f64

---

##### `ShingleSize`<sup>Required</sup> <a name="ShingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```go
func ShingleSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorLabelsList <a name="ApsAnomalyDetectorLabelsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsAnomalyDetectorLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get"></a>

```go
func Get(index *f64) ApsAnomalyDetectorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorLabelsOutputReference <a name="ApsAnomalyDetectorLabelsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsAnomalyDetectorLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorMissingDataActionOutputReference <a name="ApsAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorMissingDataActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsAnomalyDetectorMissingDataActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly">ResetMarkAsAnomaly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip">ResetSkip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMarkAsAnomaly` <a name="ResetMarkAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly"></a>

```go
func ResetMarkAsAnomaly()
```

##### `ResetSkip` <a name="ResetSkip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip"></a>

```go
func ResetSkip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput">MarkAsAnomalyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput">SkipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">MarkAsAnomaly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip">Skip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MarkAsAnomalyInput`<sup>Optional</sup> <a name="MarkAsAnomalyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput"></a>

```go
func MarkAsAnomalyInput() interface{}
```

- *Type:* interface{}

---

##### `SkipInput`<sup>Optional</sup> <a name="SkipInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput"></a>

```go
func SkipInput() interface{}
```

- *Type:* interface{}

---

##### `MarkAsAnomaly`<sup>Required</sup> <a name="MarkAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```go
func MarkAsAnomaly() interface{}
```

- *Type:* interface{}

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```go
func Skip() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorTagsList <a name="ApsAnomalyDetectorTagsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsAnomalyDetectorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get"></a>

```go
func Get(index *f64) ApsAnomalyDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsAnomalyDetectorTagsOutputReference <a name="ApsAnomalyDetectorTagsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsanomalydetector"

apsanomalydetector.NewApsAnomalyDetectorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsAnomalyDetectorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



