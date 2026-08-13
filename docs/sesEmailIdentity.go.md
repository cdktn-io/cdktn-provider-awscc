# `sesEmailIdentity` Submodule <a name="`sesEmailIdentity` Submodule" id="@cdktn/provider-awscc.sesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEmailIdentity <a name="SesEmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentity(scope Construct, id *string, config SesEmailIdentityConfig) SesEmailIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig">SesEmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig">SesEmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes">PutConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes">PutDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes">PutDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes">PutFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes">PutMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes">ResetConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes">ResetDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes">ResetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes">ResetFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes">ResetMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationSetAttributes` <a name="PutConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes"></a>

```go
func PutConfigurationSetAttributes(value SesEmailIdentityConfigurationSetAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `PutDkimAttributes` <a name="PutDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes"></a>

```go
func PutDkimAttributes(value SesEmailIdentityDkimAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `PutDkimSigningAttributes` <a name="PutDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes"></a>

```go
func PutDkimSigningAttributes(value SesEmailIdentityDkimSigningAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `PutFeedbackAttributes` <a name="PutFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes"></a>

```go
func PutFeedbackAttributes(value SesEmailIdentityFeedbackAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `PutMailFromAttributes` <a name="PutMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes"></a>

```go
func PutMailFromAttributes(value SesEmailIdentityMailFromAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationSetAttributes` <a name="ResetConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes"></a>

```go
func ResetConfigurationSetAttributes()
```

##### `ResetDkimAttributes` <a name="ResetDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes"></a>

```go
func ResetDkimAttributes()
```

##### `ResetDkimSigningAttributes` <a name="ResetDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes"></a>

```go
func ResetDkimSigningAttributes()
```

##### `ResetFeedbackAttributes` <a name="ResetFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes"></a>

```go
func ResetFeedbackAttributes()
```

##### `ResetMailFromAttributes` <a name="ResetMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes"></a>

```go
func ResetMailFromAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.SesEmailIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.SesEmailIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.SesEmailIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.SesEmailIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SesEmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes">ConfigurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes">DkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1">DkimDnsTokenName1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2">DkimDnsTokenName2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3">DkimDnsTokenName3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1">DkimDnsTokenValue1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2">DkimDnsTokenValue2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3">DkimDnsTokenValue3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes">FeedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes">MailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput">ConfigurationSetAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput">DkimAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput">DkimSigningAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput">FeedbackAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput">MailFromAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationSetAttributes`<sup>Required</sup> <a name="ConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes"></a>

```go
func ConfigurationSetAttributes() SesEmailIdentityConfigurationSetAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `DkimAttributes`<sup>Required</sup> <a name="DkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes"></a>

```go
func DkimAttributes() SesEmailIdentityDkimAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a>

---

##### `DkimDnsTokenName1`<sup>Required</sup> <a name="DkimDnsTokenName1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1"></a>

```go
func DkimDnsTokenName1() *string
```

- *Type:* *string

---

##### `DkimDnsTokenName2`<sup>Required</sup> <a name="DkimDnsTokenName2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2"></a>

```go
func DkimDnsTokenName2() *string
```

- *Type:* *string

---

##### `DkimDnsTokenName3`<sup>Required</sup> <a name="DkimDnsTokenName3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3"></a>

```go
func DkimDnsTokenName3() *string
```

- *Type:* *string

---

##### `DkimDnsTokenValue1`<sup>Required</sup> <a name="DkimDnsTokenValue1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1"></a>

```go
func DkimDnsTokenValue1() *string
```

- *Type:* *string

---

##### `DkimDnsTokenValue2`<sup>Required</sup> <a name="DkimDnsTokenValue2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2"></a>

```go
func DkimDnsTokenValue2() *string
```

- *Type:* *string

---

##### `DkimDnsTokenValue3`<sup>Required</sup> <a name="DkimDnsTokenValue3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3"></a>

```go
func DkimDnsTokenValue3() *string
```

- *Type:* *string

---

##### `DkimSigningAttributes`<sup>Required</sup> <a name="DkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes"></a>

```go
func DkimSigningAttributes() SesEmailIdentityDkimSigningAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `FeedbackAttributes`<sup>Required</sup> <a name="FeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes"></a>

```go
func FeedbackAttributes() SesEmailIdentityFeedbackAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MailFromAttributes`<sup>Required</sup> <a name="MailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes"></a>

```go
func MailFromAttributes() SesEmailIdentityMailFromAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags"></a>

```go
func Tags() SesEmailIdentityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a>

---

##### `ConfigurationSetAttributesInput`<sup>Optional</sup> <a name="ConfigurationSetAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput"></a>

```go
func ConfigurationSetAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DkimAttributesInput`<sup>Optional</sup> <a name="DkimAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput"></a>

```go
func DkimAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DkimSigningAttributesInput`<sup>Optional</sup> <a name="DkimSigningAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput"></a>

```go
func DkimSigningAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput"></a>

```go
func EmailIdentityInput() *string
```

- *Type:* *string

---

##### `FeedbackAttributesInput`<sup>Optional</sup> <a name="FeedbackAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput"></a>

```go
func FeedbackAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `MailFromAttributesInput`<sup>Optional</sup> <a name="MailFromAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput"></a>

```go
func MailFromAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity"></a>

```go
func EmailIdentity() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEmailIdentityConfig <a name="SesEmailIdentityConfig" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EmailIdentity: *string,
	ConfigurationSetAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes,
	DkimAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes,
	DkimSigningAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes,
	FeedbackAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes,
	MailFromAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes">ConfigurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes">DkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes">FeedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes">MailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the email identity. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity"></a>

```go
EmailIdentity *string
```

- *Type:* *string

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `ConfigurationSetAttributes`<sup>Optional</sup> <a name="ConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes"></a>

```go
ConfigurationSetAttributes SesEmailIdentityConfigurationSetAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `DkimAttributes`<sup>Optional</sup> <a name="DkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes"></a>

```go
DkimAttributes SesEmailIdentityDkimAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `DkimSigningAttributes`<sup>Optional</sup> <a name="DkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes"></a>

```go
DkimSigningAttributes SesEmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `FeedbackAttributes`<sup>Optional</sup> <a name="FeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes"></a>

```go
FeedbackAttributes SesEmailIdentityFeedbackAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `MailFromAttributes`<sup>Optional</sup> <a name="MailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes"></a>

```go
MailFromAttributes SesEmailIdentityMailFromAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

### SesEmailIdentityConfigurationSetAttributes <a name="SesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityConfigurationSetAttributes {
	ConfigurationSetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | The configuration set to use by default when sending from this identity. |

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName"></a>

```go
ConfigurationSetName *string
```

- *Type:* *string

The configuration set to use by default when sending from this identity.

Note that any configuration set defined in the email sending request takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#configuration_set_name SesEmailIdentity#configuration_set_name}

---

### SesEmailIdentityDkimAttributes <a name="SesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityDkimAttributes {
	SigningEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled">SigningEnabled</a></code> | <code>interface{}</code> | Sets the DKIM signing configuration for the identity. |

---

##### `SigningEnabled`<sup>Optional</sup> <a name="SigningEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled"></a>

```go
SigningEnabled interface{}
```

- *Type:* interface{}

Sets the DKIM signing configuration for the identity.

When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#signing_enabled SesEmailIdentity#signing_enabled}

---

### SesEmailIdentityDkimSigningAttributes <a name="SesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityDkimSigningAttributes {
	DomainSigningPrivateKey: *string,
	DomainSigningSelector: *string,
	NextSigningKeyLength: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>*string</code> | [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>*string</code> | [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>*string</code> | [Easy DKIM] The key length of the future DKIM key pair to be generated. |

---

##### `DomainSigningPrivateKey`<sup>Optional</sup> <a name="DomainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```go
DomainSigningPrivateKey *string
```

- *Type:* *string

[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.

The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#domain_signing_private_key SesEmailIdentity#domain_signing_private_key}

---

##### `DomainSigningSelector`<sup>Optional</sup> <a name="DomainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```go
DomainSigningSelector *string
```

- *Type:* *string

[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#domain_signing_selector SesEmailIdentity#domain_signing_selector}

---

##### `NextSigningKeyLength`<sup>Optional</sup> <a name="NextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```go
NextSigningKeyLength *string
```

- *Type:* *string

[Easy DKIM] The key length of the future DKIM key pair to be generated.

This can be changed at most once per day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#next_signing_key_length SesEmailIdentity#next_signing_key_length}

---

### SesEmailIdentityFeedbackAttributes <a name="SesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityFeedbackAttributes {
	EmailForwardingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>interface{}</code> | If the value is true, you receive email notifications when bounce or complaint events occur. |

---

##### `EmailForwardingEnabled`<sup>Optional</sup> <a name="EmailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```go
EmailForwardingEnabled interface{}
```

- *Type:* interface{}

If the value is true, you receive email notifications when bounce or complaint events occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#email_forwarding_enabled SesEmailIdentity#email_forwarding_enabled}

---

### SesEmailIdentityMailFromAttributes <a name="SesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityMailFromAttributes {
	BehaviorOnMxFailure: *string,
	MailFromDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure">BehaviorOnMxFailure</a></code> | <code>*string</code> | The action to take if the required MX record isn't found when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain">MailFromDomain</a></code> | <code>*string</code> | The custom MAIL FROM domain that you want the verified identity to use. |

---

##### `BehaviorOnMxFailure`<sup>Optional</sup> <a name="BehaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```go
BehaviorOnMxFailure *string
```

- *Type:* *string

The action to take if the required MX record isn't found when you send an email.

When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#behavior_on_mx_failure SesEmailIdentity#behavior_on_mx_failure}

---

##### `MailFromDomain`<sup>Optional</sup> <a name="MailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```go
MailFromDomain *string
```

- *Type:* *string

The custom MAIL FROM domain that you want the verified identity to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#mail_from_domain SesEmailIdentity#mail_from_domain}

---

### SesEmailIdentityTags <a name="SesEmailIdentityTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

&sesemailidentity.SesEmailIdentityTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEmailIdentityConfigurationSetAttributesOutputReference <a name="SesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityConfigurationSetAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEmailIdentityConfigurationSetAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName"></a>

```go
func ResetConfigurationSetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput"></a>

```go
func ConfigurationSetNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityDkimAttributesOutputReference <a name="SesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityDkimAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEmailIdentityDkimAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled">ResetSigningEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSigningEnabled` <a name="ResetSigningEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled"></a>

```go
func ResetSigningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput">SigningEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">SigningEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SigningEnabledInput`<sup>Optional</sup> <a name="SigningEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput"></a>

```go
func SigningEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SigningEnabled`<sup>Required</sup> <a name="SigningEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```go
func SigningEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityDkimSigningAttributesOutputReference <a name="SesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityDkimSigningAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEmailIdentityDkimSigningAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">ResetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">ResetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">ResetNextSigningKeyLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainSigningPrivateKey` <a name="ResetDomainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```go
func ResetDomainSigningPrivateKey()
```

##### `ResetDomainSigningSelector` <a name="ResetDomainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```go
func ResetDomainSigningSelector()
```

##### `ResetNextSigningKeyLength` <a name="ResetNextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```go
func ResetNextSigningKeyLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">DomainSigningPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">DomainSigningSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">NextSigningKeyLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainSigningPrivateKeyInput`<sup>Optional</sup> <a name="DomainSigningPrivateKeyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```go
func DomainSigningPrivateKeyInput() *string
```

- *Type:* *string

---

##### `DomainSigningSelectorInput`<sup>Optional</sup> <a name="DomainSigningSelectorInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```go
func DomainSigningSelectorInput() *string
```

- *Type:* *string

---

##### `NextSigningKeyLengthInput`<sup>Optional</sup> <a name="NextSigningKeyLengthInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```go
func NextSigningKeyLengthInput() *string
```

- *Type:* *string

---

##### `DomainSigningPrivateKey`<sup>Required</sup> <a name="DomainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```go
func DomainSigningPrivateKey() *string
```

- *Type:* *string

---

##### `DomainSigningSelector`<sup>Required</sup> <a name="DomainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```go
func DomainSigningSelector() *string
```

- *Type:* *string

---

##### `NextSigningKeyLength`<sup>Required</sup> <a name="NextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```go
func NextSigningKeyLength() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityFeedbackAttributesOutputReference <a name="SesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityFeedbackAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEmailIdentityFeedbackAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled">ResetEmailForwardingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailForwardingEnabled` <a name="ResetEmailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled"></a>

```go
func ResetEmailForwardingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput">EmailForwardingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailForwardingEnabledInput`<sup>Optional</sup> <a name="EmailForwardingEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput"></a>

```go
func EmailForwardingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailForwardingEnabled`<sup>Required</sup> <a name="EmailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```go
func EmailForwardingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityMailFromAttributesOutputReference <a name="SesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityMailFromAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEmailIdentityMailFromAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure">ResetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain">ResetMailFromDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehaviorOnMxFailure` <a name="ResetBehaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure"></a>

```go
func ResetBehaviorOnMxFailure()
```

##### `ResetMailFromDomain` <a name="ResetMailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain"></a>

```go
func ResetMailFromDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput">BehaviorOnMxFailureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput">MailFromDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">BehaviorOnMxFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">MailFromDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorOnMxFailureInput`<sup>Optional</sup> <a name="BehaviorOnMxFailureInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput"></a>

```go
func BehaviorOnMxFailureInput() *string
```

- *Type:* *string

---

##### `MailFromDomainInput`<sup>Optional</sup> <a name="MailFromDomainInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput"></a>

```go
func MailFromDomainInput() *string
```

- *Type:* *string

---

##### `BehaviorOnMxFailure`<sup>Required</sup> <a name="BehaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```go
func BehaviorOnMxFailure() *string
```

- *Type:* *string

---

##### `MailFromDomain`<sup>Required</sup> <a name="MailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```go
func MailFromDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityTagsList <a name="SesEmailIdentityTagsList" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesEmailIdentityTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get"></a>

```go
func Get(index *f64) SesEmailIdentityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEmailIdentityTagsOutputReference <a name="SesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesemailidentity"

sesemailidentity.NewSesEmailIdentityTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesEmailIdentityTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



