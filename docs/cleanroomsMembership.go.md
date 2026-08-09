# `cleanroomsMembership` Submodule <a name="`cleanroomsMembership` Submodule" id="@cdktn/provider-awscc.cleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsMembership <a name="CleanroomsMembership" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership awscc_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembership(scope Construct, id *string, config CleanroomsMembershipConfig) CleanroomsMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration">PutDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration">PutDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration">PutPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration">ResetDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration">ResetDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled">ResetIsMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus">ResetJobLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration">ResetPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultJobResultConfiguration` <a name="PutDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration"></a>

```go
func PutDefaultJobResultConfiguration(value CleanroomsMembershipDefaultJobResultConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---

##### `PutDefaultResultConfiguration` <a name="PutDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration"></a>

```go
func PutDefaultResultConfiguration(value CleanroomsMembershipDefaultResultConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---

##### `PutPaymentConfiguration` <a name="PutPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration"></a>

```go
func PutPaymentConfiguration(value CleanroomsMembershipPaymentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultJobResultConfiguration` <a name="ResetDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration"></a>

```go
func ResetDefaultJobResultConfiguration()
```

##### `ResetDefaultResultConfiguration` <a name="ResetDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration"></a>

```go
func ResetDefaultResultConfiguration()
```

##### `ResetIsMetricsEnabled` <a name="ResetIsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled"></a>

```go
func ResetIsMetricsEnabled()
```

##### `ResetJobLogStatus` <a name="ResetJobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus"></a>

```go
func ResetJobLogStatus()
```

##### `ResetPaymentConfiguration` <a name="ResetPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration"></a>

```go
func ResetPaymentConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId">CollaborationCreatorAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration">DefaultJobResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration">DefaultResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput">CollaborationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput">DefaultJobResultConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput">DefaultResultConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput">IsMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput">JobLogStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput">PaymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput">QueryLogStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled">IsMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus">JobLogStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationCreatorAccountId`<sup>Required</sup> <a name="CollaborationCreatorAccountId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId"></a>

```go
func CollaborationCreatorAccountId() *string
```

- *Type:* *string

---

##### `DefaultJobResultConfiguration`<sup>Required</sup> <a name="DefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration"></a>

```go
func DefaultJobResultConfiguration() CleanroomsMembershipDefaultJobResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a>

---

##### `DefaultResultConfiguration`<sup>Required</sup> <a name="DefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration"></a>

```go
func DefaultResultConfiguration() CleanroomsMembershipDefaultResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `PaymentConfiguration`<sup>Required</sup> <a name="PaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration"></a>

```go
func PaymentConfiguration() CleanroomsMembershipPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags"></a>

```go
func Tags() CleanroomsMembershipTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a>

---

##### `CollaborationIdentifierInput`<sup>Optional</sup> <a name="CollaborationIdentifierInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput"></a>

```go
func CollaborationIdentifierInput() *string
```

- *Type:* *string

---

##### `DefaultJobResultConfigurationInput`<sup>Optional</sup> <a name="DefaultJobResultConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput"></a>

```go
func DefaultJobResultConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultResultConfigurationInput`<sup>Optional</sup> <a name="DefaultResultConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput"></a>

```go
func DefaultResultConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IsMetricsEnabledInput`<sup>Optional</sup> <a name="IsMetricsEnabledInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput"></a>

```go
func IsMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JobLogStatusInput`<sup>Optional</sup> <a name="JobLogStatusInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput"></a>

```go
func JobLogStatusInput() *string
```

- *Type:* *string

---

##### `PaymentConfigurationInput`<sup>Optional</sup> <a name="PaymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput"></a>

```go
func PaymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QueryLogStatusInput`<sup>Optional</sup> <a name="QueryLogStatusInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput"></a>

```go
func QueryLogStatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `IsMetricsEnabled`<sup>Required</sup> <a name="IsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled"></a>

```go
func IsMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `JobLogStatus`<sup>Required</sup> <a name="JobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus"></a>

```go
func JobLogStatus() *string
```

- *Type:* *string

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus"></a>

```go
func QueryLogStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsMembershipConfig <a name="CleanroomsMembershipConfig" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollaborationIdentifier: *string,
	QueryLogStatus: *string,
	DefaultJobResultConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration,
	DefaultResultConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration,
	IsMetricsEnabled: interface{},
	JobLogStatus: *string,
	PaymentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration">DefaultJobResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration">DefaultResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled">IsMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus">JobLogStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms membership. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier"></a>

```go
CollaborationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}.

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus"></a>

```go
QueryLogStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `DefaultJobResultConfiguration`<sup>Optional</sup> <a name="DefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration"></a>

```go
DefaultJobResultConfiguration CleanroomsMembershipDefaultJobResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}.

---

##### `DefaultResultConfiguration`<sup>Optional</sup> <a name="DefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration"></a>

```go
DefaultResultConfiguration CleanroomsMembershipDefaultResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}.

---

##### `IsMetricsEnabled`<sup>Optional</sup> <a name="IsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled"></a>

```go
IsMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}.

---

##### `JobLogStatus`<sup>Optional</sup> <a name="JobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus"></a>

```go
JobLogStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}.

---

##### `PaymentConfiguration`<sup>Optional</sup> <a name="PaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration"></a>

```go
PaymentConfiguration CleanroomsMembershipPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}

---

### CleanroomsMembershipDefaultJobResultConfiguration <a name="CleanroomsMembershipDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultJobResultConfiguration {
	OutputConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `OutputConfiguration`<sup>Optional</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration"></a>

```go
OutputConfiguration CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration {
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3"></a>

```go
S3 CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 {
	Bucket: *string,
	KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

### CleanroomsMembershipDefaultResultConfiguration <a name="CleanroomsMembershipDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfiguration {
	OutputConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `OutputConfiguration`<sup>Optional</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration"></a>

```go
OutputConfiguration CleanroomsMembershipDefaultResultConfigurationOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3"></a>

```go
S3 CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
	Bucket: *string,
	KeyPrefix: *string,
	ResultFormat: *string,
	SingleFileOutput: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat">ResultFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput">SingleFileOutput</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

##### `ResultFormat`<sup>Optional</sup> <a name="ResultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat"></a>

```go
ResultFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

##### `SingleFileOutput`<sup>Optional</sup> <a name="SingleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput"></a>

```go
SingleFileOutput interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}.

---

### CleanroomsMembershipPaymentConfiguration <a name="CleanroomsMembershipPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfiguration {
	JobCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute,
	MachineLearning: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning,
	QueryCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}. |

---

##### `JobCompute`<sup>Optional</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute"></a>

```go
JobCompute CleanroomsMembershipPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}.

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning"></a>

```go
MachineLearning CleanroomsMembershipPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}.

---

##### `QueryCompute`<sup>Optional</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute"></a>

```go
QueryCompute CleanroomsMembershipPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}.

---

### CleanroomsMembershipPaymentConfigurationJobCompute <a name="CleanroomsMembershipPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationJobCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearning <a name="CleanroomsMembershipPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationMachineLearning {
	ModelInference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference,
	ModelTraining: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining,
	SyntheticDataGeneration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}. |

---

##### `ModelInference`<sup>Optional</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference"></a>

```go
ModelInference CleanroomsMembershipPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}.

---

##### `ModelTraining`<sup>Optional</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining"></a>

```go
ModelTraining CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}.

---

##### `SyntheticDataGeneration`<sup>Optional</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```go
SyntheticDataGeneration CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelInference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationQueryCompute <a name="CleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationQueryCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipTags <a name="CleanroomsMembershipTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```go
func PutS3(value CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```go
func S3() CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultJobResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultJobResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration">PutOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration">ResetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputConfiguration` <a name="PutOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration"></a>

```go
func PutOutputConfiguration(value CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---

##### `ResetOutputConfiguration` <a name="ResetOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration"></a>

```go
func ResetOutputConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput">OutputConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputConfiguration`<sup>Required</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration"></a>

```go
func OutputConfiguration() CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a>

---

##### `OutputConfigurationInput`<sup>Optional</sup> <a name="OutputConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```go
func OutputConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```go
func PutS3(value CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```go
func S3() CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat">ResetResultFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput">ResetSingleFileOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```

##### `ResetResultFormat` <a name="ResetResultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat"></a>

```go
func ResetResultFormat()
```

##### `ResetSingleFileOutput` <a name="ResetSingleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput"></a>

```go
func ResetSingleFileOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput">ResultFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput">SingleFileOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">ResultFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput">SingleFileOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `ResultFormatInput`<sup>Optional</sup> <a name="ResultFormatInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput"></a>

```go
func ResultFormatInput() *string
```

- *Type:* *string

---

##### `SingleFileOutputInput`<sup>Optional</sup> <a name="SingleFileOutputInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput"></a>

```go
func SingleFileOutputInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `ResultFormat`<sup>Required</sup> <a name="ResultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```go
func ResultFormat() *string
```

- *Type:* *string

---

##### `SingleFileOutput`<sup>Required</sup> <a name="SingleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput"></a>

```go
func SingleFileOutput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipDefaultResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration">PutOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration">ResetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputConfiguration` <a name="PutOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration"></a>

```go
func PutOutputConfiguration(value CleanroomsMembershipDefaultResultConfigurationOutputConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---

##### `ResetOutputConfiguration` <a name="ResetOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration"></a>

```go
func ResetOutputConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput">OutputConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputConfiguration`<sup>Required</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```go
func OutputConfiguration() CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a>

---

##### `OutputConfigurationInput`<sup>Optional</sup> <a name="OutputConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```go
func OutputConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationJobComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationJobComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationJobComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference">PutModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining">PutModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">PutSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference">ResetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining">ResetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">ResetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelInference` <a name="PutModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```go
func PutModelInference(value CleanroomsMembershipPaymentConfigurationMachineLearningModelInference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---

##### `PutModelTraining` <a name="PutModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```go
func PutModelTraining(value CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---

##### `PutSyntheticDataGeneration` <a name="PutSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```go
func PutSyntheticDataGeneration(value CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `ResetModelInference` <a name="ResetModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```go
func ResetModelInference()
```

##### `ResetModelTraining` <a name="ResetModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```go
func ResetModelTraining()
```

##### `ResetSyntheticDataGeneration` <a name="ResetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```go
func ResetSyntheticDataGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">ModelInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">ModelTrainingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">SyntheticDataGenerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInference`<sup>Required</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```go
func ModelInference() CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `ModelTraining`<sup>Required</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```go
func ModelTraining() CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `SyntheticDataGeneration`<sup>Required</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```go
func SyntheticDataGeneration() CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `ModelInferenceInput`<sup>Optional</sup> <a name="ModelInferenceInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```go
func ModelInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `ModelTrainingInput`<sup>Optional</sup> <a name="ModelTrainingInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```go
func ModelTrainingInput() interface{}
```

- *Type:* interface{}

---

##### `SyntheticDataGenerationInput`<sup>Optional</sup> <a name="SyntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```go
func SyntheticDataGenerationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationOutputReference <a name="CleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute">PutJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning">PutMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute">PutQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute">ResetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning">ResetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute">ResetQueryCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobCompute` <a name="PutJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute"></a>

```go
func PutJobCompute(value CleanroomsMembershipPaymentConfigurationJobCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---

##### `PutMachineLearning` <a name="PutMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning"></a>

```go
func PutMachineLearning(value CleanroomsMembershipPaymentConfigurationMachineLearning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---

##### `PutQueryCompute` <a name="PutQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute"></a>

```go
func PutQueryCompute(value CleanroomsMembershipPaymentConfigurationQueryCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---

##### `ResetJobCompute` <a name="ResetJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute"></a>

```go
func ResetJobCompute()
```

##### `ResetMachineLearning` <a name="ResetMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning"></a>

```go
func ResetMachineLearning()
```

##### `ResetQueryCompute` <a name="ResetQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute"></a>

```go
func ResetQueryCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput">JobComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput">MachineLearningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput">QueryComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobCompute`<sup>Required</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute"></a>

```go
func JobCompute() CleanroomsMembershipPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a>

---

##### `MachineLearning`<sup>Required</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning"></a>

```go
func MachineLearning() CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a>

---

##### `QueryCompute`<sup>Required</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```go
func QueryCompute() CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a>

---

##### `JobComputeInput`<sup>Optional</sup> <a name="JobComputeInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```go
func JobComputeInput() interface{}
```

- *Type:* interface{}

---

##### `MachineLearningInput`<sup>Optional</sup> <a name="MachineLearningInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```go
func MachineLearningInput() interface{}
```

- *Type:* interface{}

---

##### `QueryComputeInput`<sup>Optional</sup> <a name="QueryComputeInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```go
func QueryComputeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipTagsList <a name="CleanroomsMembershipTagsList" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get"></a>

```go
func Get(index *f64) CleanroomsMembershipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipTagsOutputReference <a name="CleanroomsMembershipTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



