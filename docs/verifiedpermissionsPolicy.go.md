# `verifiedpermissionsPolicy` Submodule <a name="`verifiedpermissionsPolicy` Submodule" id="@cdktn/provider-awscc.verifiedpermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicy <a name="VerifiedpermissionsPolicy" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy awscc_verifiedpermissions_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicy(scope Construct, id *string, config VerifiedpermissionsPolicyConfig) VerifiedpermissionsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig">VerifiedpermissionsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig">VerifiedpermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition"></a>

```go
func PutDefinition(value VerifiedpermissionsPolicyDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.VerifiedpermissionsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.VerifiedpermissionsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.VerifiedpermissionsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.VerifiedpermissionsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedpermissionsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedpermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference">VerifiedpermissionsPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput">DefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput">PolicyStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition"></a>

```go
func Definition() VerifiedpermissionsPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference">VerifiedpermissionsPolicyDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput"></a>

```go
func DefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyStoreIdInput`<sup>Optional</sup> <a name="PolicyStoreIdInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput"></a>

```go
func PolicyStoreIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId"></a>

```go
func PolicyStoreId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyConfig <a name="VerifiedpermissionsPolicyConfig" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition,
	PolicyStoreId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition"></a>

```go
Definition VerifiedpermissionsPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}.

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId"></a>

```go
PolicyStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}.

---

### VerifiedpermissionsPolicyDefinition <a name="VerifiedpermissionsPolicyDefinition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyDefinition {
	Static: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic,
	TemplateLinked: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static">Static</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked">TemplateLinked</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}. |

---

##### `Static`<sup>Optional</sup> <a name="Static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static"></a>

```go
Static VerifiedpermissionsPolicyDefinitionStatic
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}.

---

##### `TemplateLinked`<sup>Optional</sup> <a name="TemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked"></a>

```go
TemplateLinked VerifiedpermissionsPolicyDefinitionTemplateLinked
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}.

---

### VerifiedpermissionsPolicyDefinitionStatic <a name="VerifiedpermissionsPolicyDefinitionStatic" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyDefinitionStatic {
	Description: *string,
	Statement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement">Statement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}.

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement"></a>

```go
Statement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinked <a name="VerifiedpermissionsPolicyDefinitionTemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked {
	PolicyTemplateId: *string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal,
	Resource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId">PolicyTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}. |

---

##### `PolicyTemplateId`<sup>Optional</sup> <a name="PolicyTemplateId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId"></a>

```go
PolicyTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal"></a>

```go
Principal VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource"></a>

```go
Resource VerifiedpermissionsPolicyDefinitionTemplateLinkedResource
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal {
	EntityId: *string,
	EntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedResource <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

&verifiedpermissionspolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource {
	EntityId: *string,
	EntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyDefinitionOutputReference <a name="VerifiedpermissionsPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicyDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic">PutStatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked">PutTemplateLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic">ResetStatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked">ResetTemplateLinked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatic` <a name="PutStatic" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic"></a>

```go
func PutStatic(value VerifiedpermissionsPolicyDefinitionStatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

---

##### `PutTemplateLinked` <a name="PutTemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked"></a>

```go
func PutTemplateLinked(value VerifiedpermissionsPolicyDefinitionTemplateLinked)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---

##### `ResetStatic` <a name="ResetStatic" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic"></a>

```go
func ResetStatic()
```

##### `ResetTemplateLinked` <a name="ResetTemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked"></a>

```go
func ResetTemplateLinked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static">Static</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference">VerifiedpermissionsPolicyDefinitionStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked">TemplateLinked</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput">StaticInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput">TemplateLinkedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Static`<sup>Required</sup> <a name="Static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static"></a>

```go
func Static() VerifiedpermissionsPolicyDefinitionStaticOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference">VerifiedpermissionsPolicyDefinitionStaticOutputReference</a>

---

##### `TemplateLinked`<sup>Required</sup> <a name="TemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked"></a>

```go
func TemplateLinked() VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a>

---

##### `StaticInput`<sup>Optional</sup> <a name="StaticInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput"></a>

```go
func StaticInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateLinkedInput`<sup>Optional</sup> <a name="TemplateLinkedInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput"></a>

```go
func TemplateLinkedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyDefinitionStaticOutputReference <a name="VerifiedpermissionsPolicyDefinitionStaticOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicyDefinitionStaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyDefinitionStaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetStatement"></a>

```go
func ResetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput">StatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement">Statement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput"></a>

```go
func StatementInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement"></a>

```go
func Statement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPolicyTemplateId">ResetPolicyTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---

##### `PutResource` <a name="PutResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource"></a>

```go
func PutResource(value VerifiedpermissionsPolicyDefinitionTemplateLinkedResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---

##### `ResetPolicyTemplateId` <a name="ResetPolicyTemplateId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPolicyTemplateId"></a>

```go
func ResetPolicyTemplateId()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput">PolicyTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput">ResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId">PolicyTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal"></a>

```go
func Principal() VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource"></a>

```go
func Resource() VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a>

---

##### `PolicyTemplateIdInput`<sup>Optional</sup> <a name="PolicyTemplateIdInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput"></a>

```go
func PolicyTemplateIdInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput"></a>

```go
func ResourceInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyTemplateId`<sup>Required</sup> <a name="PolicyTemplateId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId"></a>

```go
func PolicyTemplateId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetEntityType` <a name="ResetEntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityType"></a>

```go
func ResetEntityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicy"

verifiedpermissionspolicy.NewVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetEntityType` <a name="ResetEntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityType"></a>

```go
func ResetEntityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



