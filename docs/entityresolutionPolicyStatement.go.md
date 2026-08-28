# `entityresolutionPolicyStatement` Submodule <a name="`entityresolutionPolicyStatement` Submodule" id="@cdktn/provider-awscc.entityresolutionPolicyStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionPolicyStatement <a name="EntityresolutionPolicyStatement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

entityresolutionpolicystatement.NewEntityresolutionPolicyStatement(scope Construct, id *string, config EntityresolutionPolicyStatementConfig) EntityresolutionPolicyStatement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig">EntityresolutionPolicyStatementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig">EntityresolutionPolicyStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetEffect` <a name="ResetEffect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect"></a>

```go
func ResetEffect()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal"></a>

```go
func ResetPrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

entityresolutionpolicystatement.EntityresolutionPolicyStatement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

entityresolutionpolicystatement.EntityresolutionPolicyStatement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

entityresolutionpolicystatement.EntityresolutionPolicyStatement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

entityresolutionpolicystatement.EntityresolutionPolicyStatement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EntityresolutionPolicyStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EntityresolutionPolicyStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionPolicyStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput">ActionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput">PrincipalInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput">StatementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action">Action</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal">Principal</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId">StatementId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput"></a>

```go
func ActionInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput"></a>

```go
func PrincipalInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput"></a>

```go
func StatementIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action"></a>

```go
func Action() *[]*string
```

- *Type:* *[]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal"></a>

```go
func Principal() *[]*string
```

- *Type:* *[]*string

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId"></a>

```go
func StatementId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionPolicyStatementConfig <a name="EntityresolutionPolicyStatementConfig" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionpolicystatement"

&entityresolutionpolicystatement.EntityresolutionPolicyStatementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	StatementId: *string,
	Action: *[]*string,
	Condition: *string,
	Effect: *string,
	Principal: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn">Arn</a></code> | <code>*string</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId">StatementId</a></code> | <code>*string</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action">Action</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal">Principal</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId"></a>

```go
StatementId *string
```

- *Type:* *string

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action"></a>

```go
Action *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal"></a>

```go
Principal *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---



