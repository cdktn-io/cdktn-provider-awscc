# `sesCustomVerificationEmailTemplate` Submodule <a name="`sesCustomVerificationEmailTemplate` Submodule" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCustomVerificationEmailTemplate <a name="SesCustomVerificationEmailTemplate" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.NewSesCustomVerificationEmailTemplate(scope Construct, id *string, config SesCustomVerificationEmailTemplateConfig) SesCustomVerificationEmailTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.SesCustomVerificationEmailTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.SesCustomVerificationEmailTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.SesCustomVerificationEmailTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.SesCustomVerificationEmailTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SesCustomVerificationEmailTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SesCustomVerificationEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SesCustomVerificationEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput">FailureRedirectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput">FromEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput">SuccessRedirectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput">TemplateContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput">TemplateSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl">FailureRedirectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress">FromEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl">SuccessRedirectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent">TemplateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject">TemplateSubject</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags"></a>

```go
func Tags() SesCustomVerificationEmailTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a>

---

##### `FailureRedirectionUrlInput`<sup>Optional</sup> <a name="FailureRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput"></a>

```go
func FailureRedirectionUrlInput() *string
```

- *Type:* *string

---

##### `FromEmailAddressInput`<sup>Optional</sup> <a name="FromEmailAddressInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput"></a>

```go
func FromEmailAddressInput() *string
```

- *Type:* *string

---

##### `SuccessRedirectionUrlInput`<sup>Optional</sup> <a name="SuccessRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput"></a>

```go
func SuccessRedirectionUrlInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput"></a>

```go
func TemplateContentInput() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `TemplateSubjectInput`<sup>Optional</sup> <a name="TemplateSubjectInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput"></a>

```go
func TemplateSubjectInput() *string
```

- *Type:* *string

---

##### `FailureRedirectionUrl`<sup>Required</sup> <a name="FailureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

```go
func FailureRedirectionUrl() *string
```

- *Type:* *string

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

```go
func FromEmailAddress() *string
```

- *Type:* *string

---

##### `SuccessRedirectionUrl`<sup>Required</sup> <a name="SuccessRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

```go
func SuccessRedirectionUrl() *string
```

- *Type:* *string

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent"></a>

```go
func TemplateContent() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `TemplateSubject`<sup>Required</sup> <a name="TemplateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject"></a>

```go
func TemplateSubject() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesCustomVerificationEmailTemplateConfig <a name="SesCustomVerificationEmailTemplateConfig" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

&sescustomverificationemailtemplate.SesCustomVerificationEmailTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FailureRedirectionUrl: *string,
	FromEmailAddress: *string,
	SuccessRedirectionUrl: *string,
	TemplateContent: *string,
	TemplateName: *string,
	TemplateSubject: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl">FailureRedirectionUrl</a></code> | <code>*string</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress">FromEmailAddress</a></code> | <code>*string</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl">SuccessRedirectionUrl</a></code> | <code>*string</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent">TemplateContent</a></code> | <code>*string</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName">TemplateName</a></code> | <code>*string</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject">TemplateSubject</a></code> | <code>*string</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the tenant. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailureRedirectionUrl`<sup>Required</sup> <a name="FailureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl"></a>

```go
FailureRedirectionUrl *string
```

- *Type:* *string

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress"></a>

```go
FromEmailAddress *string
```

- *Type:* *string

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `SuccessRedirectionUrl`<sup>Required</sup> <a name="SuccessRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl"></a>

```go
SuccessRedirectionUrl *string
```

- *Type:* *string

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent"></a>

```go
TemplateContent *string
```

- *Type:* *string

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `TemplateSubject`<sup>Required</sup> <a name="TemplateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject"></a>

```go
TemplateSubject *string
```

- *Type:* *string

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

### SesCustomVerificationEmailTemplateTags <a name="SesCustomVerificationEmailTemplateTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

&sescustomverificationemailtemplate.SesCustomVerificationEmailTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key">Key</a></code> | <code>*string</code> | The key of the key-value tag. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value">Value</a></code> | <code>*string</code> | The value of the key-value tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#key SesCustomVerificationEmailTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#value SesCustomVerificationEmailTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesCustomVerificationEmailTemplateTagsList <a name="SesCustomVerificationEmailTemplateTagsList" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.NewSesCustomVerificationEmailTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesCustomVerificationEmailTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get"></a>

```go
func Get(index *f64) SesCustomVerificationEmailTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesCustomVerificationEmailTemplateTagsOutputReference <a name="SesCustomVerificationEmailTemplateTagsOutputReference" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sescustomverificationemailtemplate"

sescustomverificationemailtemplate.NewSesCustomVerificationEmailTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesCustomVerificationEmailTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



