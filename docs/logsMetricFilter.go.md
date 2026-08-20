# `logsMetricFilter` Submodule <a name="`logsMetricFilter` Submodule" id="@cdktn/provider-awscc.logsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.NewLogsMetricFilter(scope Construct, id *string, config LogsMetricFilterConfig) LogsMetricFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations">PutMetricTransformations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs">ResetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions">ResetEmitSystemFieldDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria">ResetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName">ResetFilterName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricTransformations` <a name="PutMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations"></a>

```go
func PutMetricTransformations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyOnTransformedLogs` <a name="ResetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs"></a>

```go
func ResetApplyOnTransformedLogs()
```

##### `ResetEmitSystemFieldDimensions` <a name="ResetEmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions"></a>

```go
func ResetEmitSystemFieldDimensions()
```

##### `ResetFieldSelectionCriteria` <a name="ResetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria"></a>

```go
func ResetFieldSelectionCriteria()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName"></a>

```go
func ResetFilterName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.LogsMetricFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.LogsMetricFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.LogsMetricFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.LogsMetricFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogsMetricFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations">MetricTransformations</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput">ApplyOnTransformedLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput">EmitSystemFieldDimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput">FieldSelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput">FilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput">FilterPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput">MetricTransformationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions">EmitSystemFieldDimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName">FilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricTransformations`<sup>Required</sup> <a name="MetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations"></a>

```go
func MetricTransformations() LogsMetricFilterMetricTransformationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a>

---

##### `ApplyOnTransformedLogsInput`<sup>Optional</sup> <a name="ApplyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput"></a>

```go
func ApplyOnTransformedLogsInput() interface{}
```

- *Type:* interface{}

---

##### `EmitSystemFieldDimensionsInput`<sup>Optional</sup> <a name="EmitSystemFieldDimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput"></a>

```go
func EmitSystemFieldDimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldSelectionCriteriaInput`<sup>Optional</sup> <a name="FieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput"></a>

```go
func FieldSelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput"></a>

```go
func FilterNameInput() *string
```

- *Type:* *string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput"></a>

```go
func FilterPatternInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MetricTransformationsInput`<sup>Optional</sup> <a name="MetricTransformationsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput"></a>

```go
func MetricTransformationsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyOnTransformedLogs`<sup>Required</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs"></a>

```go
func ApplyOnTransformedLogs() interface{}
```

- *Type:* interface{}

---

##### `EmitSystemFieldDimensions`<sup>Required</sup> <a name="EmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions"></a>

```go
func EmitSystemFieldDimensions() *[]*string
```

- *Type:* *[]*string

---

##### `FieldSelectionCriteria`<sup>Required</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria"></a>

```go
func FieldSelectionCriteria() *string
```

- *Type:* *string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName"></a>

```go
func FilterName() *string
```

- *Type:* *string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricFilterConfig <a name="LogsMetricFilterConfig" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

&logsmetricfilter.LogsMetricFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FilterPattern: *string,
	LogGroupName: *string,
	MetricTransformations: interface{},
	ApplyOnTransformedLogs: interface{},
	EmitSystemFieldDimensions: *[]*string,
	FieldSelectionCriteria: *string,
	FilterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations">MetricTransformations</a></code> | <code>interface{}</code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>interface{}</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions">EmitSystemFieldDimensions</a></code> | <code>*[]*string</code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>*string</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName">FilterName</a></code> | <code>*string</code> | The name of the metric filter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern"></a>

```go
FilterPattern *string
```

- *Type:* *string

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `MetricTransformations`<sup>Required</sup> <a name="MetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations"></a>

```go
MetricTransformations interface{}
```

- *Type:* interface{}

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `ApplyOnTransformedLogs`<sup>Optional</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs"></a>

```go
ApplyOnTransformedLogs interface{}
```

- *Type:* interface{}

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `EmitSystemFieldDimensions`<sup>Optional</sup> <a name="EmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions"></a>

```go
EmitSystemFieldDimensions *[]*string
```

- *Type:* *[]*string

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `FieldSelectionCriteria`<sup>Optional</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria"></a>

```go
FieldSelectionCriteria *string
```

- *Type:* *string

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName"></a>

```go
FilterName *string
```

- *Type:* *string

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

### LogsMetricFilterMetricTransformations <a name="LogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

&logsmetricfilter.LogsMetricFilterMetricTransformations {
	MetricName: *string,
	MetricNamespace: *string,
	MetricValue: *string,
	DefaultValue: *f64,
	Dimensions: interface{},
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | A custom namespace to contain your metric in CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue">MetricValue</a></code> | <code>*string</code> | The value that is published to the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue">DefaultValue</a></code> | <code>*f64</code> | (Optional) The value to emit when a filter pattern does not match a log event. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | The fields to use as dimensions for the metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit">Unit</a></code> | <code>*string</code> | The unit to assign to the metric. If you omit this, the unit is set as ``None``. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the CloudWatch metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_name LogsMetricFilter#metric_name}

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace"></a>

```go
MetricNamespace *string
```

- *Type:* *string

A custom namespace to contain your metric in CloudWatch.

Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_namespace LogsMetricFilter#metric_namespace}

---

##### `MetricValue`<sup>Required</sup> <a name="MetricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue"></a>

```go
MetricValue *string
```

- *Type:* *string

The value that is published to the CloudWatch metric.

For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_value LogsMetricFilter#metric_value}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue"></a>

```go
DefaultValue *f64
```

- *Type:* *f64

(Optional) The value to emit when a filter pattern does not match a log event.

This value can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#default_value LogsMetricFilter#default_value}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

The fields to use as dimensions for the metric.

One metric filter can include as many as three dimensions.
Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#dimensions LogsMetricFilter#dimensions}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit to assign to the metric. If you omit this, the unit is set as ``None``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#unit LogsMetricFilter#unit}

---

### LogsMetricFilterMetricTransformationsDimensions <a name="LogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

&logsmetricfilter.LogsMetricFilterMetricTransformationsDimensions {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key">Key</a></code> | <code>*string</code> | The name for the CW metric dimension that the metric filter creates. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value">Value</a></code> | <code>*string</code> | The log event field that will contain the value for this dimension. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name for the CW metric dimension that the metric filter creates.

Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#key LogsMetricFilter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The log event field that will contain the value for this dimension.

This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#value LogsMetricFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricFilterMetricTransformationsDimensionsList <a name="LogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.NewLogsMetricFilterMetricTransformationsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogsMetricFilterMetricTransformationsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```go
func Get(index *f64) LogsMetricFilterMetricTransformationsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="LogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.NewLogsMetricFilterMetricTransformationsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogsMetricFilterMetricTransformationsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsMetricFilterMetricTransformationsList <a name="LogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.NewLogsMetricFilterMetricTransformationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogsMetricFilterMetricTransformationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get"></a>

```go
func Get(index *f64) LogsMetricFilterMetricTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsMetricFilterMetricTransformationsOutputReference <a name="LogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsmetricfilter"

logsmetricfilter.NewLogsMetricFilterMetricTransformationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogsMetricFilterMetricTransformationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput">MetricValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue">MetricValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```go
func Dimensions() LogsMetricFilterMetricTransformationsDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *f64
```

- *Type:* *f64

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput"></a>

```go
func MetricNamespaceInput() *string
```

- *Type:* *string

---

##### `MetricValueInput`<sup>Optional</sup> <a name="MetricValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput"></a>

```go
func MetricValueInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *f64
```

- *Type:* *f64

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```go
func MetricNamespace() *string
```

- *Type:* *string

---

##### `MetricValue`<sup>Required</sup> <a name="MetricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```go
func MetricValue() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



