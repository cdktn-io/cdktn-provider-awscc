# `ec2IpamExternalResourceVerificationToken` Submodule <a name="`ec2IpamExternalResourceVerificationToken` Submodule" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamExternalResourceVerificationToken <a name="Ec2IpamExternalResourceVerificationToken" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token awscc_ec2_ipam_external_resource_verification_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.NewEc2IpamExternalResourceVerificationToken(scope Construct, id *string, config Ec2IpamExternalResourceVerificationTokenConfig) Ec2IpamExternalResourceVerificationToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig">Ec2IpamExternalResourceVerificationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig">Ec2IpamExternalResourceVerificationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2IpamExternalResourceVerificationToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2IpamExternalResourceVerificationToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamExternalResourceVerificationToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamArn">IpamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn">IpamExternalResourceVerificationTokenArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId">IpamExternalResourceVerificationTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamRegion">IpamRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList">Ec2IpamExternalResourceVerificationTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenName">TokenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamIdInput">IpamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamId">IpamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamArn"></a>

```go
func IpamArn() *string
```

- *Type:* *string

---

##### `IpamExternalResourceVerificationTokenArn`<sup>Required</sup> <a name="IpamExternalResourceVerificationTokenArn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn"></a>

```go
func IpamExternalResourceVerificationTokenArn() *string
```

- *Type:* *string

---

##### `IpamExternalResourceVerificationTokenId`<sup>Required</sup> <a name="IpamExternalResourceVerificationTokenId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId"></a>

```go
func IpamExternalResourceVerificationTokenId() *string
```

- *Type:* *string

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamRegion"></a>

```go
func IpamRegion() *string
```

- *Type:* *string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tags"></a>

```go
func Tags() Ec2IpamExternalResourceVerificationTokenTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList">Ec2IpamExternalResourceVerificationTokenTagsList</a>

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenName"></a>

```go
func TokenName() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `IpamIdInput`<sup>Optional</sup> <a name="IpamIdInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamIdInput"></a>

```go
func IpamIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamId"></a>

```go
func IpamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamExternalResourceVerificationTokenConfig <a name="Ec2IpamExternalResourceVerificationTokenConfig" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

&ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IpamId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.ipamId">IpamId</a></code> | <code>*string</code> | The ID of the IPAM that will create the token. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.ipamId"></a>

```go
IpamId *string
```

- *Type:* *string

The ID of the IPAM that will create the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#ipam_id Ec2IpamExternalResourceVerificationToken#ipam_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#tags Ec2IpamExternalResourceVerificationToken#tags}

---

### Ec2IpamExternalResourceVerificationTokenTags <a name="Ec2IpamExternalResourceVerificationTokenTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

&ec2ipamexternalresourceverificationtoken.Ec2IpamExternalResourceVerificationTokenTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#key Ec2IpamExternalResourceVerificationToken#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#value Ec2IpamExternalResourceVerificationToken#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamExternalResourceVerificationTokenTagsList <a name="Ec2IpamExternalResourceVerificationTokenTagsList" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.NewEc2IpamExternalResourceVerificationTokenTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamExternalResourceVerificationTokenTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get"></a>

```go
func Get(index *f64) Ec2IpamExternalResourceVerificationTokenTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamExternalResourceVerificationTokenTagsOutputReference <a name="Ec2IpamExternalResourceVerificationTokenTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamexternalresourceverificationtoken"

ec2ipamexternalresourceverificationtoken.NewEc2IpamExternalResourceVerificationTokenTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamExternalResourceVerificationTokenTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



