# `iotFleetMetric` Submodule <a name="`iotFleetMetric` Submodule" id="@cdktn/provider-awscc.iotFleetMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotFleetMetric <a name="IotFleetMetric" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.NewIotFleetMetric(scope Construct, id *string, config IotFleetMetricConfig) IotFleetMetric
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig">IotFleetMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig">IotFleetMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType">PutAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField">ResetAggregationField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType">ResetAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion">ResetQueryVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregationType` <a name="PutAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType"></a>

```go
func PutAggregationType(value IotFleetMetricAggregationType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregationField` <a name="ResetAggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField"></a>

```go
func ResetAggregationField()
```

##### `ResetAggregationType` <a name="ResetAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType"></a>

```go
func ResetAggregationType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetQueryVersion` <a name="ResetQueryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion"></a>

```go
func ResetQueryVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit"></a>

```go
func ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.IotFleetMetric_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.IotFleetMetric_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.IotFleetMetric_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.IotFleetMetric_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotFleetMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotFleetMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotFleetMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType">AggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn">MetricArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput">AggregationFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput">AggregationTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput">QueryVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField">AggregationField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion">QueryVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType"></a>

```go
func AggregationType() IotFleetMetricAggregationTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `MetricArn`<sup>Required</sup> <a name="MetricArn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn"></a>

```go
func MetricArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags"></a>

```go
func Tags() IotFleetMetricTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AggregationFieldInput`<sup>Optional</sup> <a name="AggregationFieldInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput"></a>

```go
func AggregationFieldInput() *string
```

- *Type:* *string

---

##### `AggregationTypeInput`<sup>Optional</sup> <a name="AggregationTypeInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput"></a>

```go
func AggregationTypeInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `QueryVersionInput`<sup>Optional</sup> <a name="QueryVersionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput"></a>

```go
func QueryVersionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `AggregationField`<sup>Required</sup> <a name="AggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField"></a>

```go
func AggregationField() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `QueryVersion`<sup>Required</sup> <a name="QueryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion"></a>

```go
func QueryVersion() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotFleetMetricAggregationType <a name="IotFleetMetricAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

&iotfleetmetric.IotFleetMetricAggregationType {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name">Name</a></code> | <code>*string</code> | Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values">Values</a></code> | <code>*[]*string</code> | Fleet Indexing aggregation type values. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#name IotFleetMetric#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Fleet Indexing aggregation type values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#values IotFleetMetric#values}

---

### IotFleetMetricConfig <a name="IotFleetMetricConfig" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

&iotfleetmetric.IotFleetMetricConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MetricName: *string,
	AggregationField: *string,
	AggregationType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotFleetMetric.IotFleetMetricAggregationType,
	Description: *string,
	IndexName: *string,
	Period: *f64,
	QueryString: *string,
	QueryVersion: *string,
	Tags: interface{},
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField">AggregationField</a></code> | <code>*string</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType">AggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description">Description</a></code> | <code>*string</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName">IndexName</a></code> | <code>*string</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period">Period</a></code> | <code>*f64</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString">QueryString</a></code> | <code>*string</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion">QueryVersion</a></code> | <code>*string</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit">Unit</a></code> | <code>*string</code> | The unit of data points emitted by a fleet metric. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `AggregationField`<sup>Optional</sup> <a name="AggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField"></a>

```go
AggregationField *string
```

- *Type:* *string

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `AggregationType`<sup>Optional</sup> <a name="AggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType"></a>

```go
AggregationType IotFleetMetricAggregationType
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `QueryVersion`<sup>Optional</sup> <a name="QueryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion"></a>

```go
QueryVersion *string
```

- *Type:* *string

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

### IotFleetMetricTags <a name="IotFleetMetricTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

&iotfleetmetric.IotFleetMetricTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#key IotFleetMetric#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_fleet_metric#value IotFleetMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotFleetMetricAggregationTypeOutputReference <a name="IotFleetMetricAggregationTypeOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.NewIotFleetMetricAggregationTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotFleetMetricAggregationTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotFleetMetricTagsList <a name="IotFleetMetricTagsList" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.NewIotFleetMetricTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotFleetMetricTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get"></a>

```go
func Get(index *f64) IotFleetMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotFleetMetricTagsOutputReference <a name="IotFleetMetricTagsOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetmetric"

iotfleetmetric.NewIotFleetMetricTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotFleetMetricTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



