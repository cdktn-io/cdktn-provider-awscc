# `ssmcontactsContact` Submodule <a name="`ssmcontactsContact` Submodule" id="@cdktn/provider-awscc.ssmcontactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContact <a name="SsmcontactsContact" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact awscc_ssmcontacts_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContact(scope Construct, id *string, config SsmcontactsContactConfig) SsmcontactsContact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig">SsmcontactsContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig">SsmcontactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlan` <a name="PutPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan"></a>

```go
func PutPlan(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPlan` <a name="ResetPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.SsmcontactsContact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.SsmcontactsContact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.SsmcontactsContact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.SsmcontactsContact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmcontactsContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmcontactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan">Plan</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput">PlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan"></a>

```go
func Plan() SsmcontactsContactPlanList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags"></a>

```go
func Tags() SsmcontactsContactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput"></a>

```go
func PlanInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactConfig <a name="SsmcontactsContactConfig" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Alias: *string,
	DisplayName: *string,
	Type: *string,
	Plan: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Name of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type">Type</a></code> | <code>*string</code> | Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan">Plan</a></code> | <code>interface{}</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Name of the contact.

String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan"></a>

```go
Plan interface{}
```

- *Type:* interface{}

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#plan SsmcontactsContact#plan}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

### SsmcontactsContactPlan <a name="SsmcontactsContactPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactPlan {
	DurationInMinutes: *f64,
	RotationIds: *[]*string,
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds">RotationIds</a></code> | <code>*[]*string</code> | List of Rotation Ids to associate with Contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets">Targets</a></code> | <code>interface{}</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#duration_in_minutes SsmcontactsContact#duration_in_minutes}

---

##### `RotationIds`<sup>Optional</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds"></a>

```go
RotationIds *[]*string
```

- *Type:* *[]*string

List of Rotation Ids to associate with Contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#rotation_ids SsmcontactsContact#rotation_ids}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#targets SsmcontactsContact#targets}

---

### SsmcontactsContactPlanTargets <a name="SsmcontactsContactPlanTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactPlanTargets {
	ChannelTargetInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo,
	ContactTargetInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `ChannelTargetInfo`<sup>Optional</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo"></a>

```go
ChannelTargetInfo SsmcontactsContactPlanTargetsChannelTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#channel_target_info SsmcontactsContact#channel_target_info}

---

##### `ContactTargetInfo`<sup>Optional</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo"></a>

```go
ContactTargetInfo SsmcontactsContactPlanTargetsContactTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#contact_target_info SsmcontactsContact#contact_target_info}

---

### SsmcontactsContactPlanTargetsChannelTargetInfo <a name="SsmcontactsContactPlanTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactPlanTargetsChannelTargetInfo {
	ChannelId: *string,
	RetryIntervalInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId">ChannelId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>*f64</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#channel_id SsmcontactsContact#channel_id}

---

##### `RetryIntervalInMinutes`<sup>Optional</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```go
RetryIntervalInMinutes *f64
```

- *Type:* *f64

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}

---

### SsmcontactsContactPlanTargetsContactTargetInfo <a name="SsmcontactsContactPlanTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactPlanTargetsContactTargetInfo {
	ContactId: *string,
	IsEssential: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId">ContactId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential">IsEssential</a></code> | <code>interface{}</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId"></a>

```go
ContactId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#contact_id SsmcontactsContact#contact_id}

---

##### `IsEssential`<sup>Optional</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential"></a>

```go
IsEssential interface{}
```

- *Type:* interface{}

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#is_essential SsmcontactsContact#is_essential}

---

### SsmcontactsContactTags <a name="SsmcontactsContactTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

&ssmcontactscontact.SsmcontactsContactTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#key SsmcontactsContact#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact#value SsmcontactsContact#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsContactPlanList <a name="SsmcontactsContactPlanList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmcontactsContactPlanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get"></a>

```go
func Get(index *f64) SsmcontactsContactPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactPlanOutputReference <a name="SsmcontactsContactPlanOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmcontactsContactPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds">ResetRotationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetRotationIds` <a name="ResetRotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds"></a>

```go
func ResetRotationIds()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput">RotationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds">RotationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets"></a>

```go
func Targets() SsmcontactsContactPlanTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a>

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RotationIdsInput`<sup>Optional</sup> <a name="RotationIdsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput"></a>

```go
func RotationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `RotationIds`<sup>Required</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds"></a>

```go
func RotationIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">ResetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetRetryIntervalInMinutes` <a name="ResetRetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```go
func ResetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">RetryIntervalInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `RetryIntervalInMinutesInput`<sup>Optional</sup> <a name="RetryIntervalInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```go
func RetryIntervalInMinutesInput() *f64
```

- *Type:* *f64

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `RetryIntervalInMinutes`<sup>Required</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```go
func RetryIntervalInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactPlanTargetsContactTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanTargetsContactTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmcontactsContactPlanTargetsContactTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId">ResetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential">ResetIsEssential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactId` <a name="ResetContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId"></a>

```go
func ResetContactId()
```

##### `ResetIsEssential` <a name="ResetIsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```go
func ResetIsEssential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput">ContactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput">IsEssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential">IsEssential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```go
func ContactIdInput() *string
```

- *Type:* *string

---

##### `IsEssentialInput`<sup>Optional</sup> <a name="IsEssentialInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```go
func IsEssentialInput() interface{}
```

- *Type:* interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```go
func IsEssential() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactPlanTargetsList <a name="SsmcontactsContactPlanTargetsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmcontactsContactPlanTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get"></a>

```go
func Get(index *f64) SsmcontactsContactPlanTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactPlanTargetsOutputReference <a name="SsmcontactsContactPlanTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactPlanTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmcontactsContactPlanTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo">PutChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo">PutContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo">ResetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo">ResetContactTargetInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChannelTargetInfo` <a name="PutChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo"></a>

```go
func PutChannelTargetInfo(value SsmcontactsContactPlanTargetsChannelTargetInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---

##### `PutContactTargetInfo` <a name="PutContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo"></a>

```go
func PutContactTargetInfo(value SsmcontactsContactPlanTargetsContactTargetInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---

##### `ResetChannelTargetInfo` <a name="ResetChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo"></a>

```go
func ResetChannelTargetInfo()
```

##### `ResetContactTargetInfo` <a name="ResetContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo"></a>

```go
func ResetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput">ChannelTargetInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput">ContactTargetInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelTargetInfo`<sup>Required</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo"></a>

```go
func ChannelTargetInfo() SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a>

---

##### `ContactTargetInfo`<sup>Required</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo"></a>

```go
func ContactTargetInfo() SsmcontactsContactPlanTargetsContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a>

---

##### `ChannelTargetInfoInput`<sup>Optional</sup> <a name="ChannelTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput"></a>

```go
func ChannelTargetInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ContactTargetInfoInput`<sup>Optional</sup> <a name="ContactTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput"></a>

```go
func ContactTargetInfoInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactTagsList <a name="SsmcontactsContactTagsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmcontactsContactTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get"></a>

```go
func Get(index *f64) SsmcontactsContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsContactTagsOutputReference <a name="SsmcontactsContactTagsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontact"

ssmcontactscontact.NewSsmcontactsContactTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmcontactsContactTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



