# `iotsitewiseAccessPolicy` Submodule <a name="`iotsitewiseAccessPolicy` Submodule" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAccessPolicy <a name="IotsitewiseAccessPolicy" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy awscc_iotsitewise_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicy(scope Construct, id *string, config IotsitewiseAccessPolicyConfig) IotsitewiseAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig">IotsitewiseAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig">IotsitewiseAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity">PutAccessPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource">PutAccessPolicyResource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessPolicyIdentity` <a name="PutAccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity"></a>

```go
func PutAccessPolicyIdentity(value IotsitewiseAccessPolicyAccessPolicyIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---

##### `PutAccessPolicyResource` <a name="PutAccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource"></a>

```go
func PutAccessPolicyResource(value IotsitewiseAccessPolicyAccessPolicyResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.IotsitewiseAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.IotsitewiseAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.IotsitewiseAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.IotsitewiseAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotsitewiseAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotsitewiseAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn">AccessPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity">AccessPolicyIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource">AccessPolicyResource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput">AccessPolicyIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput">AccessPolicyPermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput">AccessPolicyResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission">AccessPolicyPermission</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicyArn`<sup>Required</sup> <a name="AccessPolicyArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn"></a>

```go
func AccessPolicyArn() *string
```

- *Type:* *string

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId"></a>

```go
func AccessPolicyId() *string
```

- *Type:* *string

---

##### `AccessPolicyIdentity`<sup>Required</sup> <a name="AccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity"></a>

```go
func AccessPolicyIdentity() IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a>

---

##### `AccessPolicyResource`<sup>Required</sup> <a name="AccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource"></a>

```go
func AccessPolicyResource() IotsitewiseAccessPolicyAccessPolicyResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccessPolicyIdentityInput`<sup>Optional</sup> <a name="AccessPolicyIdentityInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput"></a>

```go
func AccessPolicyIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPolicyPermissionInput`<sup>Optional</sup> <a name="AccessPolicyPermissionInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput"></a>

```go
func AccessPolicyPermissionInput() *string
```

- *Type:* *string

---

##### `AccessPolicyResourceInput`<sup>Optional</sup> <a name="AccessPolicyResourceInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput"></a>

```go
func AccessPolicyResourceInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPolicyPermission`<sup>Required</sup> <a name="AccessPolicyPermission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission"></a>

```go
func AccessPolicyPermission() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentity <a name="IotsitewiseAccessPolicyAccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyIdentity {
	IamRole: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole,
	IamUser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser,
	User: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole">IamRole</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | Contains information for an IAM role identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser">IamUser</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | Contains information for an IAM user identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | Contains information for a user identity in an access policy. |

---

##### `IamRole`<sup>Optional</sup> <a name="IamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole"></a>

```go
IamRole IotsitewiseAccessPolicyAccessPolicyIdentityIamRole
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

Contains information for an IAM role identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#iam_role IotsitewiseAccessPolicy#iam_role}

---

##### `IamUser`<sup>Optional</sup> <a name="IamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser"></a>

```go
IamUser IotsitewiseAccessPolicyAccessPolicyIdentityIamUser
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

Contains information for an IAM user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#iam_user IotsitewiseAccessPolicy#iam_user}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user"></a>

```go
User IotsitewiseAccessPolicyAccessPolicyIdentityUser
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

Contains information for a user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#user IotsitewiseAccessPolicy#user}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRole <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the IAM role. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the IAM user. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id">Id</a></code> | <code>*string</code> | The AWS SSO ID of the user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id"></a>

```go
Id *string
```

- *Type:* *string

The AWS SSO ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResource <a name="IotsitewiseAccessPolicyAccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyResource {
	Portal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal,
	Project: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal">Portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | A portal resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | A project resource. |

---

##### `Portal`<sup>Optional</sup> <a name="Portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal"></a>

```go
Portal IotsitewiseAccessPolicyAccessPolicyResourcePortal
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

A portal resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#portal IotsitewiseAccessPolicy#portal}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project"></a>

```go
Project IotsitewiseAccessPolicyAccessPolicyResourceProject
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

A project resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#project IotsitewiseAccessPolicy#project}

---

### IotsitewiseAccessPolicyAccessPolicyResourcePortal <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id">Id</a></code> | <code>*string</code> | The ID of the portal. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResourceProject <a name="IotsitewiseAccessPolicyAccessPolicyResourceProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id">Id</a></code> | <code>*string</code> | The ID of the project. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyConfig <a name="IotsitewiseAccessPolicyConfig" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

&iotsitewiseaccesspolicy.IotsitewiseAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessPolicyIdentity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity,
	AccessPolicyPermission: *string,
	AccessPolicyResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity">AccessPolicyIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | The identity for this access policy. Choose either a user or a group but not both. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission">AccessPolicyPermission</a></code> | <code>*string</code> | The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource">AccessPolicyResource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicyIdentity`<sup>Required</sup> <a name="AccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity"></a>

```go
AccessPolicyIdentity IotsitewiseAccessPolicyAccessPolicyIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

The identity for this access policy. Choose either a user or a group but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}

---

##### `AccessPolicyPermission`<sup>Required</sup> <a name="AccessPolicyPermission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission"></a>

```go
AccessPolicyPermission *string
```

- *Type:* *string

The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}

---

##### `AccessPolicyResource`<sup>Required</sup> <a name="AccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource"></a>

```go
AccessPolicyResource IotsitewiseAccessPolicyAccessPolicyResource
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole">PutIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser">PutIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole">ResetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser">ResetIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamRole` <a name="PutIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole"></a>

```go
func PutIamRole(value IotsitewiseAccessPolicyAccessPolicyIdentityIamRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---

##### `PutIamUser` <a name="PutIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser"></a>

```go
func PutIamUser(value IotsitewiseAccessPolicyAccessPolicyIdentityIamUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser"></a>

```go
func PutUser(value IotsitewiseAccessPolicyAccessPolicyIdentityUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---

##### `ResetIamRole` <a name="ResetIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole"></a>

```go
func ResetIamRole()
```

##### `ResetIamUser` <a name="ResetIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser"></a>

```go
func ResetIamUser()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole">IamRole</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser">IamUser</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput">IamRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput">IamUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput">UserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole"></a>

```go
func IamRole() IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a>

---

##### `IamUser`<sup>Required</sup> <a name="IamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser"></a>

```go
func IamUser() IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user"></a>

```go
func User() IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a>

---

##### `IamRoleInput`<sup>Optional</sup> <a name="IamRoleInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput"></a>

```go
func IamRoleInput() interface{}
```

- *Type:* interface{}

---

##### `IamUserInput`<sup>Optional</sup> <a name="IamUserInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput"></a>

```go
func IamUserInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput"></a>

```go
func UserInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyResourceOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal">PutPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject">PutProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal">ResetPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortal` <a name="PutPortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal"></a>

```go
func PutPortal(value IotsitewiseAccessPolicyAccessPolicyResourcePortal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---

##### `PutProject` <a name="PutProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject"></a>

```go
func PutProject(value IotsitewiseAccessPolicyAccessPolicyResourceProject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---

##### `ResetPortal` <a name="ResetPortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal"></a>

```go
func ResetPortal()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject"></a>

```go
func ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal">Portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput">PortalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput">ProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Portal`<sup>Required</sup> <a name="Portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal"></a>

```go
func Portal() IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project"></a>

```go
func Project() IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a>

---

##### `PortalInput`<sup>Optional</sup> <a name="PortalInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput"></a>

```go
func PortalInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput"></a>

```go
func ProjectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseaccesspolicy"

iotsitewiseaccesspolicy.NewIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



