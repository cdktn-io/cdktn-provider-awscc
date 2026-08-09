# `securityagentTargetDomain` Submodule <a name="`securityagentTargetDomain` Submodule" id="@cdktn/provider-awscc.securityagentTargetDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentTargetDomain <a name="SecurityagentTargetDomain" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain awscc_securityagent_target_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomain(scope Construct, id *string, config SecurityagentTargetDomainConfig) SecurityagentTargetDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig">SecurityagentTargetDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig">SecurityagentTargetDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.SecurityagentTargetDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.SecurityagentTargetDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.SecurityagentTargetDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.SecurityagentTargetDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityagentTargetDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityagentTargetDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentTargetDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId">TargetDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails">VerificationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus">VerificationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason">VerificationStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt">VerifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput">TargetDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput">VerificationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName">TargetDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod">VerificationMethod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags"></a>

```go
func Tags() SecurityagentTargetDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a>

---

##### `TargetDomainId`<sup>Required</sup> <a name="TargetDomainId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId"></a>

```go
func TargetDomainId() *string
```

- *Type:* *string

---

##### `VerificationDetails`<sup>Required</sup> <a name="VerificationDetails" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails"></a>

```go
func VerificationDetails() SecurityagentTargetDomainVerificationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus"></a>

```go
func VerificationStatus() *string
```

- *Type:* *string

---

##### `VerificationStatusReason`<sup>Required</sup> <a name="VerificationStatusReason" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason"></a>

```go
func VerificationStatusReason() *string
```

- *Type:* *string

---

##### `VerifiedAt`<sup>Required</sup> <a name="VerifiedAt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt"></a>

```go
func VerifiedAt() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetDomainNameInput`<sup>Optional</sup> <a name="TargetDomainNameInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput"></a>

```go
func TargetDomainNameInput() *string
```

- *Type:* *string

---

##### `VerificationMethodInput`<sup>Optional</sup> <a name="VerificationMethodInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput"></a>

```go
func VerificationMethodInput() *string
```

- *Type:* *string

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName"></a>

```go
func TargetDomainName() *string
```

- *Type:* *string

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod"></a>

```go
func VerificationMethod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentTargetDomainConfig <a name="SecurityagentTargetDomainConfig" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

&securityagenttargetdomain.SecurityagentTargetDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TargetDomainName: *string,
	VerificationMethod: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName">TargetDomainName</a></code> | <code>*string</code> | Domain name of the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod">VerificationMethod</a></code> | <code>*string</code> | Verification method for the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags for the target domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName"></a>

```go
TargetDomainName *string
```

- *Type:* *string

Domain name of the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod"></a>

```go
VerificationMethod *string
```

- *Type:* *string

Verification method for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}

---

### SecurityagentTargetDomainTags <a name="SecurityagentTargetDomainTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

&securityagenttargetdomain.SecurityagentTargetDomainTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#key SecurityagentTargetDomain#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_target_domain#value SecurityagentTargetDomain#value}

---

### SecurityagentTargetDomainVerificationDetails <a name="SecurityagentTargetDomainVerificationDetails" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

&securityagenttargetdomain.SecurityagentTargetDomainVerificationDetails {

}
```


### SecurityagentTargetDomainVerificationDetailsDnsTxt <a name="SecurityagentTargetDomainVerificationDetailsDnsTxt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

&securityagenttargetdomain.SecurityagentTargetDomainVerificationDetailsDnsTxt {

}
```


### SecurityagentTargetDomainVerificationDetailsHttpRoute <a name="SecurityagentTargetDomainVerificationDetailsHttpRoute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

&securityagenttargetdomain.SecurityagentTargetDomainVerificationDetailsHttpRoute {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityagentTargetDomainTagsList <a name="SecurityagentTargetDomainTagsList" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomainTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityagentTargetDomainTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get"></a>

```go
func Get(index *f64) SecurityagentTargetDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentTargetDomainTagsOutputReference <a name="SecurityagentTargetDomainTagsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomainTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityagentTargetDomainTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference <a name="SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName">DnsRecordName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType">DnsRecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsRecordName`<sup>Required</sup> <a name="DnsRecordName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName"></a>

```go
func DnsRecordName() *string
```

- *Type:* *string

---

##### `DnsRecordType`<sup>Required</sup> <a name="DnsRecordType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType"></a>

```go
func DnsRecordType() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityagentTargetDomainVerificationDetailsDnsTxt
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a>

---


### SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference <a name="SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath">RoutePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutePath`<sup>Required</sup> <a name="RoutePath" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath"></a>

```go
func RoutePath() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityagentTargetDomainVerificationDetailsHttpRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a>

---


### SecurityagentTargetDomainVerificationDetailsOutputReference <a name="SecurityagentTargetDomainVerificationDetailsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagenttargetdomain"

securityagenttargetdomain.NewSecurityagentTargetDomainVerificationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentTargetDomainVerificationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt">DnsTxt</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsTxt`<sup>Required</sup> <a name="DnsTxt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt"></a>

```go
func DnsTxt() SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a>

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute"></a>

```go
func HttpRoute() SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityagentTargetDomainVerificationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a>

---



