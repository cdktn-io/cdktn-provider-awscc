# `supportauthzSupportPermit` Submodule <a name="`supportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.supportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportauthzSupportPermit <a name="SupportauthzSupportPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermit(scope Construct, id *string, config SupportauthzSupportPermitConfig) SupportauthzSupportPermit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit">PutPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo">PutSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId">ResetSupportCaseDisplayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermit` <a name="PutPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit"></a>

```go
func PutPermit(value SupportauthzSupportPermitPermit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `PutSigningKeyInfo` <a name="PutSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo"></a>

```go
func PutSigningKeyInfo(value SupportauthzSupportPermitSigningKeyInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSupportCaseDisplayId` <a name="ResetSupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId"></a>

```go
func ResetSupportCaseDisplayId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.SupportauthzSupportPermit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.SupportauthzSupportPermit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.SupportauthzSupportPermit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.SupportauthzSupportPermit_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SupportauthzSupportPermit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit">Permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId">PermitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo">SigningKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput">PermitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput">SigningKeyInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput">SupportCaseDisplayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId">SupportCaseDisplayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permit`<sup>Required</sup> <a name="Permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit"></a>

```go
func Permit() SupportauthzSupportPermitPermitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a>

---

##### `PermitId`<sup>Required</sup> <a name="PermitId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId"></a>

```go
func PermitId() *string
```

- *Type:* *string

---

##### `SigningKeyInfo`<sup>Required</sup> <a name="SigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo"></a>

```go
func SigningKeyInfo() SupportauthzSupportPermitSigningKeyInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags"></a>

```go
func Tags() SupportauthzSupportPermitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermitInput`<sup>Optional</sup> <a name="PermitInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput"></a>

```go
func PermitInput() interface{}
```

- *Type:* interface{}

---

##### `SigningKeyInfoInput`<sup>Optional</sup> <a name="SigningKeyInfoInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput"></a>

```go
func SigningKeyInfoInput() interface{}
```

- *Type:* interface{}

---

##### `SupportCaseDisplayIdInput`<sup>Optional</sup> <a name="SupportCaseDisplayIdInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput"></a>

```go
func SupportCaseDisplayIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportCaseDisplayId`<sup>Required</sup> <a name="SupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```go
func SupportCaseDisplayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportPermitConfig <a name="SupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Permit: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit,
	SigningKeyInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo,
	Description: *string,
	SupportCaseDisplayId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name">Name</a></code> | <code>*string</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit">Permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo">SigningKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId">SupportCaseDisplayId</a></code> | <code>*string</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `Permit`<sup>Required</sup> <a name="Permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit"></a>

```go
Permit SupportauthzSupportPermitPermit
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `SigningKeyInfo`<sup>Required</sup> <a name="SigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo"></a>

```go
SigningKeyInfo SupportauthzSupportPermitSigningKeyInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `SupportCaseDisplayId`<sup>Optional</sup> <a name="SupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId"></a>

```go
SupportCaseDisplayId *string
```

- *Type:* *string

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

### SupportauthzSupportPermitPermit <a name="SupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitPermit {
	Actions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions,
	Resources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources,
	Conditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions">Conditions</a></code> | <code>interface{}</code> | Optional time-bound conditions (at most two). |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions"></a>

```go
Actions SupportauthzSupportPermitPermitActions
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources"></a>

```go
Resources SupportauthzSupportPermitPermitResources
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

### SupportauthzSupportPermitPermitActions <a name="SupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitPermitActions {
	Actions: *[]*string,
	AllActions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions">Actions</a></code> | <code>*[]*string</code> | An explicit list of actions to grant. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions">AllActions</a></code> | <code>*string</code> | Grants all actions. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `AllActions`<sup>Optional</sup> <a name="AllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions"></a>

```go
AllActions *string
```

- *Type:* *string

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

### SupportauthzSupportPermitPermitConditions <a name="SupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitPermitConditions {
	AllowAfter: *string,
	AllowBefore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter">AllowAfter</a></code> | <code>*string</code> | The permit is active only after this time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore">AllowBefore</a></code> | <code>*string</code> | The permit is active only before this time. |

---

##### `AllowAfter`<sup>Optional</sup> <a name="AllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter"></a>

```go
AllowAfter *string
```

- *Type:* *string

The permit is active only after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_after SupportauthzSupportPermit#allow_after}

---

##### `AllowBefore`<sup>Optional</sup> <a name="AllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore"></a>

```go
AllowBefore *string
```

- *Type:* *string

The permit is active only before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_before SupportauthzSupportPermit#allow_before}

---

### SupportauthzSupportPermitPermitResources <a name="SupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitPermitResources {
	AllResourcesInRegion: *string,
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion">AllResourcesInRegion</a></code> | <code>*string</code> | Applies to all resources in the region. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources">Resources</a></code> | <code>*[]*string</code> | An explicit list of resource ARNs. |

---

##### `AllResourcesInRegion`<sup>Optional</sup> <a name="AllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion"></a>

```go
AllResourcesInRegion *string
```

- *Type:* *string

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

### SupportauthzSupportPermitSigningKeyInfo <a name="SupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitSigningKeyInfo {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The ARN of the KMS key used to sign permit grants. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

### SupportauthzSupportPermitTags <a name="SupportauthzSupportPermitTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

&supportauthzsupportpermit.SupportauthzSupportPermitTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#key SupportauthzSupportPermit#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#value SupportauthzSupportPermit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzSupportPermitPermitActionsOutputReference <a name="SupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitPermitActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupportauthzSupportPermitPermitActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions">ResetAllActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetAllActions` <a name="ResetAllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions"></a>

```go
func ResetAllActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput">AllActionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions">AllActions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllActionsInput`<sup>Optional</sup> <a name="AllActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput"></a>

```go
func AllActionsInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `AllActions`<sup>Required</sup> <a name="AllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```go
func AllActions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitPermitConditionsList <a name="SupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitPermitConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupportauthzSupportPermitPermitConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get"></a>

```go
func Get(index *f64) SupportauthzSupportPermitPermitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitPermitConditionsOutputReference <a name="SupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitPermitConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupportauthzSupportPermitPermitConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter">ResetAllowAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore">ResetAllowBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAfter` <a name="ResetAllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter"></a>

```go
func ResetAllowAfter()
```

##### `ResetAllowBefore` <a name="ResetAllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore"></a>

```go
func ResetAllowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput">AllowAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput">AllowBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">AllowAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">AllowBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAfterInput`<sup>Optional</sup> <a name="AllowAfterInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput"></a>

```go
func AllowAfterInput() *string
```

- *Type:* *string

---

##### `AllowBeforeInput`<sup>Optional</sup> <a name="AllowBeforeInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput"></a>

```go
func AllowBeforeInput() *string
```

- *Type:* *string

---

##### `AllowAfter`<sup>Required</sup> <a name="AllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```go
func AllowAfter() *string
```

- *Type:* *string

---

##### `AllowBefore`<sup>Required</sup> <a name="AllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```go
func AllowBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitPermitOutputReference <a name="SupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitPermitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupportauthzSupportPermitPermitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions"></a>

```go
func PutActions(value SupportauthzSupportPermitPermitActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources"></a>

```go
func PutResources(value SupportauthzSupportPermitPermitResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions"></a>

```go
func ResetConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```go
func Actions() SupportauthzSupportPermitPermitActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```go
func Conditions() SupportauthzSupportPermitPermitConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```go
func Resources() SupportauthzSupportPermitPermitResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitPermitResourcesOutputReference <a name="SupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitPermitResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupportauthzSupportPermitPermitResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion">ResetAllResourcesInRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllResourcesInRegion` <a name="ResetAllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion"></a>

```go
func ResetAllResourcesInRegion()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput">AllResourcesInRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">AllResourcesInRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllResourcesInRegionInput`<sup>Optional</sup> <a name="AllResourcesInRegionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput"></a>

```go
func AllResourcesInRegionInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllResourcesInRegion`<sup>Required</sup> <a name="AllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```go
func AllResourcesInRegion() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitSigningKeyInfoOutputReference <a name="SupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitSigningKeyInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupportauthzSupportPermitSigningKeyInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitTagsList <a name="SupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupportauthzSupportPermitTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get"></a>

```go
func Get(index *f64) SupportauthzSupportPermitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupportauthzSupportPermitTagsOutputReference <a name="SupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportauthzsupportpermit"

supportauthzsupportpermit.NewSupportauthzSupportPermitTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupportauthzSupportPermitTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



