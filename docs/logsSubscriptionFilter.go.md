# `logsSubscriptionFilter` Submodule <a name="`logsSubscriptionFilter` Submodule" id="@cdktn/provider-awscc.logsSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsSubscriptionFilter <a name="LogsSubscriptionFilter" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter awscc_logs_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

logssubscriptionfilter.NewLogsSubscriptionFilter(scope Construct, id *string, config LogsSubscriptionFilterConfig) LogsSubscriptionFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs">ResetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution">ResetDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields">ResetEmitSystemFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria">ResetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName">ResetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplyOnTransformedLogs` <a name="ResetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs"></a>

```go
func ResetApplyOnTransformedLogs()
```

##### `ResetDistribution` <a name="ResetDistribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution"></a>

```go
func ResetDistribution()
```

##### `ResetEmitSystemFields` <a name="ResetEmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields"></a>

```go
func ResetEmitSystemFields()
```

##### `ResetFieldSelectionCriteria` <a name="ResetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria"></a>

```go
func ResetFieldSelectionCriteria()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName"></a>

```go
func ResetFilterName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn"></a>

```go
func ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

logssubscriptionfilter.LogsSubscriptionFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

logssubscriptionfilter.LogsSubscriptionFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

logssubscriptionfilter.LogsSubscriptionFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

logssubscriptionfilter.LogsSubscriptionFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogsSubscriptionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogsSubscriptionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LogsSubscriptionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput">ApplyOnTransformedLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput">DistributionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput">EmitSystemFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput">FieldSelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput">FilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput">FilterPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution">Distribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields">EmitSystemFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName">FilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplyOnTransformedLogsInput`<sup>Optional</sup> <a name="ApplyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput"></a>

```go
func ApplyOnTransformedLogsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput"></a>

```go
func DistributionInput() *string
```

- *Type:* *string

---

##### `EmitSystemFieldsInput`<sup>Optional</sup> <a name="EmitSystemFieldsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput"></a>

```go
func EmitSystemFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldSelectionCriteriaInput`<sup>Optional</sup> <a name="FieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput"></a>

```go
func FieldSelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput"></a>

```go
func FilterNameInput() *string
```

- *Type:* *string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput"></a>

```go
func FilterPatternInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ApplyOnTransformedLogs`<sup>Required</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs"></a>

```go
func ApplyOnTransformedLogs() interface{}
```

- *Type:* interface{}

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution"></a>

```go
func Distribution() *string
```

- *Type:* *string

---

##### `EmitSystemFields`<sup>Required</sup> <a name="EmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields"></a>

```go
func EmitSystemFields() *[]*string
```

- *Type:* *[]*string

---

##### `FieldSelectionCriteria`<sup>Required</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria"></a>

```go
func FieldSelectionCriteria() *string
```

- *Type:* *string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName"></a>

```go
func FilterName() *string
```

- *Type:* *string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsSubscriptionFilterConfig <a name="LogsSubscriptionFilterConfig" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logssubscriptionfilter"

&logssubscriptionfilter.LogsSubscriptionFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationArn: *string,
	FilterPattern: *string,
	LogGroupName: *string,
	ApplyOnTransformedLogs: interface{},
	Distribution: *string,
	EmitSystemFields: *[]*string,
	FieldSelectionCriteria: *string,
	FilterName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | The filtering expressions that restrict what gets delivered to the destination AWS resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The log group to associate with the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>interface{}</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution">Distribution</a></code> | <code>*string</code> | The method used to distribute log data to the destination, which can be either random or grouped by log stream. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields">EmitSystemFields</a></code> | <code>*[]*string</code> | The list of system fields that are included in the log events sent to the subscription destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>*string</code> | The filter expression that specifies which log events are processed by this subscription filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName">FilterName</a></code> | <code>*string</code> | The name of the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#destination_arn LogsSubscriptionFilter#destination_arn}

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern"></a>

```go
FilterPattern *string
```

- *Type:* *string

The filtering expressions that restrict what gets delivered to the destination AWS resource.

For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_pattern LogsSubscriptionFilter#filter_pattern}

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The log group to associate with the subscription filter.

All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#log_group_name LogsSubscriptionFilter#log_group_name}

---

##### `ApplyOnTransformedLogs`<sup>Optional</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs"></a>

```go
ApplyOnTransformedLogs interface{}
```

- *Type:* interface{}

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#apply_on_transformed_logs LogsSubscriptionFilter#apply_on_transformed_logs}

---

##### `Distribution`<sup>Optional</sup> <a name="Distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution"></a>

```go
Distribution *string
```

- *Type:* *string

The method used to distribute log data to the destination, which can be either random or grouped by log stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#distribution LogsSubscriptionFilter#distribution}

---

##### `EmitSystemFields`<sup>Optional</sup> <a name="EmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields"></a>

```go
EmitSystemFields *[]*string
```

- *Type:* *[]*string

The list of system fields that are included in the log events sent to the subscription destination.

Returns the `emitSystemFields` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#emit_system_fields LogsSubscriptionFilter#emit_system_fields}

---

##### `FieldSelectionCriteria`<sup>Optional</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria"></a>

```go
FieldSelectionCriteria *string
```

- *Type:* *string

The filter expression that specifies which log events are processed by this subscription filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#field_selection_criteria LogsSubscriptionFilter#field_selection_criteria}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName"></a>

```go
FilterName *string
```

- *Type:* *string

The name of the subscription filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_name LogsSubscriptionFilter#filter_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream.

You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#role_arn LogsSubscriptionFilter#role_arn}

---



