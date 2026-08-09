# `awsexternalanthropicWorkspace` Submodule <a name="`awsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsexternalanthropicWorkspace <a name="AwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.NewAwsexternalanthropicWorkspace(scope Construct, id *string, config AwsexternalanthropicWorkspaceConfig) AwsexternalanthropicWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency">PutDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency">ResetDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataResidency` <a name="PutDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency"></a>

```go
func PutDataResidency(value AwsexternalanthropicWorkspaceDataResidency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataResidency` <a name="ResetDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency"></a>

```go
func ResetDataResidency()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.AwsexternalanthropicWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.AwsexternalanthropicWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.AwsexternalanthropicWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.AwsexternalanthropicWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsexternalanthropicWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency">DataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput">DataResidencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataResidency`<sup>Required</sup> <a name="DataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency"></a>

```go
func DataResidency() AwsexternalanthropicWorkspaceDataResidencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags"></a>

```go
func Tags() AwsexternalanthropicWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `DataResidencyInput`<sup>Optional</sup> <a name="DataResidencyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput"></a>

```go
func DataResidencyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsexternalanthropicWorkspaceConfig <a name="AwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

&awsexternalanthropicworkspace.AwsexternalanthropicWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DataResidency: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency">DataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | Data residency configuration for the workspace. WorkspaceGeo is immutable after creation. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#name AwsexternalanthropicWorkspace#name}

---

##### `DataResidency`<sup>Optional</sup> <a name="DataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency"></a>

```go
DataResidency AwsexternalanthropicWorkspaceDataResidency
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#data_residency AwsexternalanthropicWorkspace#data_residency}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#tags AwsexternalanthropicWorkspace#tags}

---

### AwsexternalanthropicWorkspaceDataResidency <a name="AwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

&awsexternalanthropicworkspace.AwsexternalanthropicWorkspaceDataResidency {
	AllowedInferenceGeos: *[]*string,
	DefaultInferenceGeo: *string,
	WorkspaceGeo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos">AllowedInferenceGeos</a></code> | <code>*[]*string</code> | Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo">DefaultInferenceGeo</a></code> | <code>*string</code> | Default inference geo applied when requests omit the parameter. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo">WorkspaceGeo</a></code> | <code>*string</code> | Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted. |

---

##### `AllowedInferenceGeos`<sup>Optional</sup> <a name="AllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos"></a>

```go
AllowedInferenceGeos *[]*string
```

- *Type:* *[]*string

Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#allowed_inference_geos AwsexternalanthropicWorkspace#allowed_inference_geos}

---

##### `DefaultInferenceGeo`<sup>Optional</sup> <a name="DefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo"></a>

```go
DefaultInferenceGeo *string
```

- *Type:* *string

Default inference geo applied when requests omit the parameter.

Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#default_inference_geo AwsexternalanthropicWorkspace#default_inference_geo}

---

##### `WorkspaceGeo`<sup>Optional</sup> <a name="WorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo"></a>

```go
WorkspaceGeo *string
```

- *Type:* *string

Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#workspace_geo AwsexternalanthropicWorkspace#workspace_geo}

---

### AwsexternalanthropicWorkspaceTags <a name="AwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

&awsexternalanthropicworkspace.AwsexternalanthropicWorkspaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#key AwsexternalanthropicWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#value AwsexternalanthropicWorkspace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="AwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.NewAwsexternalanthropicWorkspaceDataResidencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AwsexternalanthropicWorkspaceDataResidencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos">ResetAllowedInferenceGeos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo">ResetDefaultInferenceGeo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo">ResetWorkspaceGeo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedInferenceGeos` <a name="ResetAllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos"></a>

```go
func ResetAllowedInferenceGeos()
```

##### `ResetDefaultInferenceGeo` <a name="ResetDefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo"></a>

```go
func ResetDefaultInferenceGeo()
```

##### `ResetWorkspaceGeo` <a name="ResetWorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo"></a>

```go
func ResetWorkspaceGeo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput">AllowedInferenceGeosInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput">DefaultInferenceGeoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput">WorkspaceGeoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">AllowedInferenceGeos</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">DefaultInferenceGeo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">WorkspaceGeo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInferenceGeosInput`<sup>Optional</sup> <a name="AllowedInferenceGeosInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput"></a>

```go
func AllowedInferenceGeosInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultInferenceGeoInput`<sup>Optional</sup> <a name="DefaultInferenceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput"></a>

```go
func DefaultInferenceGeoInput() *string
```

- *Type:* *string

---

##### `WorkspaceGeoInput`<sup>Optional</sup> <a name="WorkspaceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput"></a>

```go
func WorkspaceGeoInput() *string
```

- *Type:* *string

---

##### `AllowedInferenceGeos`<sup>Required</sup> <a name="AllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```go
func AllowedInferenceGeos() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultInferenceGeo`<sup>Required</sup> <a name="DefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```go
func DefaultInferenceGeo() *string
```

- *Type:* *string

---

##### `WorkspaceGeo`<sup>Required</sup> <a name="WorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```go
func WorkspaceGeo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AwsexternalanthropicWorkspaceTagsList <a name="AwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.NewAwsexternalanthropicWorkspaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AwsexternalanthropicWorkspaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get"></a>

```go
func Get(index *f64) AwsexternalanthropicWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AwsexternalanthropicWorkspaceTagsOutputReference <a name="AwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/awsexternalanthropicworkspace"

awsexternalanthropicworkspace.NewAwsexternalanthropicWorkspaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AwsexternalanthropicWorkspaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



