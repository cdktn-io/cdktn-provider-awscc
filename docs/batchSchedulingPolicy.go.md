# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.NewBatchSchedulingPolicy(scope Construct, id *string, config BatchSchedulingPolicyConfig) BatchSchedulingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy">PutFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy">PutQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy">ResetFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy">ResetQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFairsharePolicy` <a name="PutFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy"></a>

```go
func PutFairsharePolicy(value BatchSchedulingPolicyFairsharePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `PutQuotaSharePolicy` <a name="PutQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy"></a>

```go
func PutQuotaSharePolicy(value BatchSchedulingPolicyQuotaSharePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `ResetFairsharePolicy` <a name="ResetFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy"></a>

```go
func ResetFairsharePolicy()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName"></a>

```go
func ResetName()
```

##### `ResetQuotaSharePolicy` <a name="ResetQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy"></a>

```go
func ResetQuotaSharePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.BatchSchedulingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.BatchSchedulingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.BatchSchedulingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.BatchSchedulingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput">FairsharePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput">QuotaSharePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FairsharePolicy`<sup>Required</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy"></a>

```go
func FairsharePolicy() BatchSchedulingPolicyFairsharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QuotaSharePolicy`<sup>Required</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy"></a>

```go
func QuotaSharePolicy() BatchSchedulingPolicyQuotaSharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `FairsharePolicyInput`<sup>Optional</sup> <a name="FairsharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput"></a>

```go
func FairsharePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuotaSharePolicyInput`<sup>Optional</sup> <a name="QuotaSharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput"></a>

```go
func QuotaSharePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

&batchschedulingpolicy.BatchSchedulingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FairsharePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy,
	Name: *string,
	QuotaSharePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FairsharePolicy`<sup>Optional</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy"></a>

```go
FairsharePolicy BatchSchedulingPolicyFairsharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `QuotaSharePolicy`<sup>Optional</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy"></a>

```go
QuotaSharePolicy BatchSchedulingPolicyQuotaSharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

### BatchSchedulingPolicyFairsharePolicy <a name="BatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

&batchschedulingpolicy.BatchSchedulingPolicyFairsharePolicy {
	ComputeReservation: *f64,
	ShareDecaySeconds: *f64,
	ShareDistribution: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation">ComputeReservation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution">ShareDistribution</a></code> | <code>interface{}</code> | List of Share Attributes. |

---

##### `ComputeReservation`<sup>Optional</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation"></a>

```go
ComputeReservation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `ShareDecaySeconds`<sup>Optional</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds"></a>

```go
ShareDecaySeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `ShareDistribution`<sup>Optional</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution"></a>

```go
ShareDistribution interface{}
```

- *Type:* interface{}

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairsharePolicyShareDistribution <a name="BatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

&batchschedulingpolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution {
	ShareIdentifier: *string,
	WeightFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier">ShareIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor">WeightFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `ShareIdentifier`<sup>Optional</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier"></a>

```go
ShareIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `WeightFactor`<sup>Optional</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor"></a>

```go
WeightFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

### BatchSchedulingPolicyQuotaSharePolicy <a name="BatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

&batchschedulingpolicy.BatchSchedulingPolicyQuotaSharePolicy {
	IdleResourceAssignmentStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}. |

---

##### `IdleResourceAssignmentStrategy`<sup>Optional</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy"></a>

```go
IdleResourceAssignmentStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairsharePolicyOutputReference <a name="BatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.NewBatchSchedulingPolicyFairsharePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchSchedulingPolicyFairsharePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution">PutShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation">ResetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds">ResetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution">ResetShareDistribution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShareDistribution` <a name="PutShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution"></a>

```go
func PutShareDistribution(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComputeReservation` <a name="ResetComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation"></a>

```go
func ResetComputeReservation()
```

##### `ResetShareDecaySeconds` <a name="ResetShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds"></a>

```go
func ResetShareDecaySeconds()
```

##### `ResetShareDistribution` <a name="ResetShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution"></a>

```go
func ResetShareDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput">ComputeReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput">ShareDecaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput">ShareDistributionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```go
func ShareDistribution() BatchSchedulingPolicyFairsharePolicyShareDistributionList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `ComputeReservationInput`<sup>Optional</sup> <a name="ComputeReservationInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput"></a>

```go
func ComputeReservationInput() *f64
```

- *Type:* *f64

---

##### `ShareDecaySecondsInput`<sup>Optional</sup> <a name="ShareDecaySecondsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```go
func ShareDecaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ShareDistributionInput`<sup>Optional</sup> <a name="ShareDistributionInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput"></a>

```go
func ShareDistributionInput() interface{}
```

- *Type:* interface{}

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```go
func ComputeReservation() *f64
```

- *Type:* *f64

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```go
func ShareDecaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.NewBatchSchedulingPolicyFairsharePolicyShareDistributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchSchedulingPolicyFairsharePolicyShareDistributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```go
func Get(index *f64) BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.NewBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier">ResetShareIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor">ResetWeightFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShareIdentifier` <a name="ResetShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier"></a>

```go
func ResetShareIdentifier()
```

##### `ResetWeightFactor` <a name="ResetWeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```go
func ResetWeightFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput">ShareIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput">WeightFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShareIdentifierInput`<sup>Optional</sup> <a name="ShareIdentifierInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```go
func ShareIdentifierInput() *string
```

- *Type:* *string

---

##### `WeightFactorInput`<sup>Optional</sup> <a name="WeightFactorInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```go
func WeightFactorInput() *f64
```

- *Type:* *f64

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```go
func ShareIdentifier() *string
```

- *Type:* *string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```go
func WeightFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="BatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchschedulingpolicy"

batchschedulingpolicy.NewBatchSchedulingPolicyQuotaSharePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchSchedulingPolicyQuotaSharePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy">ResetIdleResourceAssignmentStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleResourceAssignmentStrategy` <a name="ResetIdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy"></a>

```go
func ResetIdleResourceAssignmentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput">IdleResourceAssignmentStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleResourceAssignmentStrategyInput`<sup>Optional</sup> <a name="IdleResourceAssignmentStrategyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput"></a>

```go
func IdleResourceAssignmentStrategyInput() *string
```

- *Type:* *string

---

##### `IdleResourceAssignmentStrategy`<sup>Required</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```go
func IdleResourceAssignmentStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



