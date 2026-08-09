# `comprehendFlywheel` Submodule <a name="`comprehendFlywheel` Submodule" id="@cdktn/provider-awscc.comprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendFlywheel <a name="ComprehendFlywheel" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheel(scope Construct, id *string, config ComprehendFlywheelConfig) ComprehendFlywheel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig">PutDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig">PutTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn">ResetActiveModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig">ResetDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType">ResetModelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig">ResetTaskConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSecurityConfig` <a name="PutDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig"></a>

```go
func PutDataSecurityConfig(value ComprehendFlywheelDataSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaskConfig` <a name="PutTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig"></a>

```go
func PutTaskConfig(value ComprehendFlywheelTaskConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `ResetActiveModelArn` <a name="ResetActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn"></a>

```go
func ResetActiveModelArn()
```

##### `ResetDataSecurityConfig` <a name="ResetDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig"></a>

```go
func ResetDataSecurityConfig()
```

##### `ResetModelType` <a name="ResetModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType"></a>

```go
func ResetModelType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaskConfig` <a name="ResetTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig"></a>

```go
func ResetTaskConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.ComprehendFlywheel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.ComprehendFlywheel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.ComprehendFlywheel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.ComprehendFlywheel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComprehendFlywheel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig">DataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig">TaskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput">ActiveModelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput">DataLakeS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput">DataSecurityConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput">FlywheelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput">ModelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput">TaskConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn">ActiveModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri">DataLakeS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName">FlywheelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataSecurityConfig`<sup>Required</sup> <a name="DataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig"></a>

```go
func DataSecurityConfig() ComprehendFlywheelDataSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags"></a>

```go
func Tags() ComprehendFlywheelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a>

---

##### `TaskConfig`<sup>Required</sup> <a name="TaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig"></a>

```go
func TaskConfig() ComprehendFlywheelTaskConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a>

---

##### `ActiveModelArnInput`<sup>Optional</sup> <a name="ActiveModelArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput"></a>

```go
func ActiveModelArnInput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `DataLakeS3UriInput`<sup>Optional</sup> <a name="DataLakeS3UriInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput"></a>

```go
func DataLakeS3UriInput() *string
```

- *Type:* *string

---

##### `DataSecurityConfigInput`<sup>Optional</sup> <a name="DataSecurityConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput"></a>

```go
func DataSecurityConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FlywheelNameInput`<sup>Optional</sup> <a name="FlywheelNameInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput"></a>

```go
func FlywheelNameInput() *string
```

- *Type:* *string

---

##### `ModelTypeInput`<sup>Optional</sup> <a name="ModelTypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput"></a>

```go
func ModelTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TaskConfigInput`<sup>Optional</sup> <a name="TaskConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput"></a>

```go
func TaskConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveModelArn`<sup>Required</sup> <a name="ActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn"></a>

```go
func ActiveModelArn() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `DataLakeS3Uri`<sup>Required</sup> <a name="DataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri"></a>

```go
func DataLakeS3Uri() *string
```

- *Type:* *string

---

##### `FlywheelName`<sup>Required</sup> <a name="FlywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName"></a>

```go
func FlywheelName() *string
```

- *Type:* *string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendFlywheelConfig <a name="ComprehendFlywheelConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataAccessRoleArn: *string,
	DataLakeS3Uri: *string,
	FlywheelName: *string,
	ActiveModelArn: *string,
	DataSecurityConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig,
	ModelType: *string,
	Tags: interface{},
	TaskConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri">DataLakeS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName">FlywheelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn">ActiveModelArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig">DataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType">ModelType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig">TaskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `DataLakeS3Uri`<sup>Required</sup> <a name="DataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri"></a>

```go
DataLakeS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `FlywheelName`<sup>Required</sup> <a name="FlywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName"></a>

```go
FlywheelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `ActiveModelArn`<sup>Optional</sup> <a name="ActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn"></a>

```go
ActiveModelArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `DataSecurityConfig`<sup>Optional</sup> <a name="DataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig"></a>

```go
DataSecurityConfig ComprehendFlywheelDataSecurityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `ModelType`<sup>Optional</sup> <a name="ModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType"></a>

```go
ModelType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `TaskConfig`<sup>Optional</sup> <a name="TaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig"></a>

```go
TaskConfig ComprehendFlywheelTaskConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

### ComprehendFlywheelDataSecurityConfig <a name="ComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelDataSecurityConfig {
	DataLakeKmsKeyId: *string,
	ModelKmsKeyId: *string,
	VolumeKmsKeyId: *string,
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId">DataLakeKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}. |

---

##### `DataLakeKmsKeyId`<sup>Optional</sup> <a name="DataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId"></a>

```go
DataLakeKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId"></a>

```go
ModelKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig"></a>

```go
VpcConfig ComprehendFlywheelDataSecurityConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

### ComprehendFlywheelDataSecurityConfigVpcConfig <a name="ComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelDataSecurityConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

### ComprehendFlywheelTags <a name="ComprehendFlywheelTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}.

---

### ComprehendFlywheelTaskConfig <a name="ComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelTaskConfig {
	DocumentClassificationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig,
	EntityRecognitionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig,
	LanguageCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig">DocumentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig">EntityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}. |

---

##### `DocumentClassificationConfig`<sup>Optional</sup> <a name="DocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig"></a>

```go
DocumentClassificationConfig ComprehendFlywheelTaskConfigDocumentClassificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

##### `EntityRecognitionConfig`<sup>Optional</sup> <a name="EntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig"></a>

```go
EntityRecognitionConfig ComprehendFlywheelTaskConfigEntityRecognitionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

### ComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig {
	Labels: *[]*string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig {
	EntityTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes">EntityTypes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}. |

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes"></a>

```go
EntityTypes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

&comprehendflywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendFlywheelDataSecurityConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelDataSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendFlywheelDataSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId">ResetDataLakeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value ComprehendFlywheelDataSecurityConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `ResetDataLakeKmsKeyId` <a name="ResetDataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId"></a>

```go
func ResetDataLakeKmsKeyId()
```

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId"></a>

```go
func ResetModelKmsKeyId()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput">DataLakeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">DataLakeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `DataLakeKmsKeyIdInput`<sup>Optional</sup> <a name="DataLakeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput"></a>

```go
func DataLakeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput"></a>

```go
func ModelKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataLakeKmsKeyId`<sup>Required</sup> <a name="DataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```go
func DataLakeKmsKeyId() *string
```

- *Type:* *string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```go
func ModelKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTagsList <a name="ComprehendFlywheelTagsList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComprehendFlywheelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get"></a>

```go
func Get(index *f64) ComprehendFlywheelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTagsOutputReference <a name="ComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComprehendFlywheelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```go
func Get(index *f64) ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes"></a>

```go
func PutEntityTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes"></a>

```go
func ResetEntityTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```go
func EntityTypes() ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput"></a>

```go
func EntityTypesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendFlywheelTaskConfigOutputReference <a name="ComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehendflywheel"

comprehendflywheel.NewComprehendFlywheelTaskConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendFlywheelTaskConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig">PutDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig">PutEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig">ResetDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig">ResetEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocumentClassificationConfig` <a name="PutDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig"></a>

```go
func PutDocumentClassificationConfig(value ComprehendFlywheelTaskConfigDocumentClassificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `PutEntityRecognitionConfig` <a name="PutEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig"></a>

```go
func PutEntityRecognitionConfig(value ComprehendFlywheelTaskConfigEntityRecognitionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `ResetDocumentClassificationConfig` <a name="ResetDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig"></a>

```go
func ResetDocumentClassificationConfig()
```

##### `ResetEntityRecognitionConfig` <a name="ResetEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig"></a>

```go
func ResetEntityRecognitionConfig()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">DocumentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">EntityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput">DocumentClassificationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput">EntityRecognitionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentClassificationConfig`<sup>Required</sup> <a name="DocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```go
func DocumentClassificationConfig() ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `EntityRecognitionConfig`<sup>Required</sup> <a name="EntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```go
func EntityRecognitionConfig() ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `DocumentClassificationConfigInput`<sup>Optional</sup> <a name="DocumentClassificationConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput"></a>

```go
func DocumentClassificationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EntityRecognitionConfigInput`<sup>Optional</sup> <a name="EntityRecognitionConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput"></a>

```go
func EntityRecognitionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



