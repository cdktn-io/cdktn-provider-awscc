# `detectiveMemberInvitation` Submodule <a name="`detectiveMemberInvitation` Submodule" id="@cdktn/provider-awscc.detectiveMemberInvitation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMemberInvitation <a name="DetectiveMemberInvitation" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation awscc_detective_member_invitation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

detectivememberinvitation.NewDetectiveMemberInvitation(scope Construct, id *string, config DetectiveMemberInvitationConfig) DetectiveMemberInvitation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig">DetectiveMemberInvitationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig">DetectiveMemberInvitationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification">ResetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableEmailNotification` <a name="ResetDisableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification"></a>

```go
func ResetDisableEmailNotification()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage"></a>

```go
func ResetMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

detectivememberinvitation.DetectiveMemberInvitation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

detectivememberinvitation.DetectiveMemberInvitation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

detectivememberinvitation.DetectiveMemberInvitation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

detectivememberinvitation.DetectiveMemberInvitation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DetectiveMemberInvitation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DetectiveMemberInvitation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DetectiveMemberInvitation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput">DisableEmailNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput">GraphArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput">MemberEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput">MemberIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn">GraphArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress">MemberEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message">Message</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DisableEmailNotificationInput`<sup>Optional</sup> <a name="DisableEmailNotificationInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput"></a>

```go
func DisableEmailNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `GraphArnInput`<sup>Optional</sup> <a name="GraphArnInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput"></a>

```go
func GraphArnInput() *string
```

- *Type:* *string

---

##### `MemberEmailAddressInput`<sup>Optional</sup> <a name="MemberEmailAddressInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput"></a>

```go
func MemberEmailAddressInput() *string
```

- *Type:* *string

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput"></a>

```go
func MemberIdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `DisableEmailNotification`<sup>Required</sup> <a name="DisableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification"></a>

```go
func DisableEmailNotification() interface{}
```

- *Type:* interface{}

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn"></a>

```go
func GraphArn() *string
```

- *Type:* *string

---

##### `MemberEmailAddress`<sup>Required</sup> <a name="MemberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress"></a>

```go
func MemberEmailAddress() *string
```

- *Type:* *string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberInvitationConfig <a name="DetectiveMemberInvitationConfig" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/detectivememberinvitation"

&detectivememberinvitation.DetectiveMemberInvitationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GraphArn: *string,
	MemberEmailAddress: *string,
	MemberId: *string,
	DisableEmailNotification: interface{},
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn">GraphArn</a></code> | <code>*string</code> | The ARN of the graph to which the member account will be invited. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress">MemberEmailAddress</a></code> | <code>*string</code> | The root email address for the account to be invited, for validation. Updating this field has no effect. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId">MemberId</a></code> | <code>*string</code> | The AWS account ID to be invited to join the graph as a member. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>interface{}</code> | When set to true, invitation emails are not sent to the member accounts. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message">Message</a></code> | <code>*string</code> | A message to be included in the email invitation sent to the invited account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn"></a>

```go
GraphArn *string
```

- *Type:* *string

The ARN of the graph to which the member account will be invited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#graph_arn DetectiveMemberInvitation#graph_arn}

---

##### `MemberEmailAddress`<sup>Required</sup> <a name="MemberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress"></a>

```go
MemberEmailAddress *string
```

- *Type:* *string

The root email address for the account to be invited, for validation. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#member_email_address DetectiveMemberInvitation#member_email_address}

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId"></a>

```go
MemberId *string
```

- *Type:* *string

The AWS account ID to be invited to join the graph as a member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#member_id DetectiveMemberInvitation#member_id}

---

##### `DisableEmailNotification`<sup>Optional</sup> <a name="DisableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification"></a>

```go
DisableEmailNotification interface{}
```

- *Type:* interface{}

When set to true, invitation emails are not sent to the member accounts.

Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#disable_email_notification DetectiveMemberInvitation#disable_email_notification}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

A message to be included in the email invitation sent to the invited account.

Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#message DetectiveMemberInvitation#message}

---



