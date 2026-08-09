# `securityagentSecurityRequirementPack` Submodule <a name="`securityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentSecurityRequirementPack <a name="SecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.NewSecurityagentSecurityRequirementPack(scope Construct, id *string, config SecurityagentSecurityRequirementPackConfig) SecurityagentSecurityRequirementPack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements">PutSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements">ResetSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecurityRequirements` <a name="PutSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements"></a>

```go
func PutSecurityRequirements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSecurityRequirements` <a name="ResetSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements"></a>

```go
func ResetSecurityRequirements()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityagentSecurityRequirementPack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId">PackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements">SecurityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput">SecurityRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PackId`<sup>Required</sup> <a name="PackId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId"></a>

```go
func PackId() *string
```

- *Type:* *string

---

##### `SecurityRequirements`<sup>Required</sup> <a name="SecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```go
func SecurityRequirements() SecurityagentSecurityRequirementPackSecurityRequirementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags"></a>

```go
func Tags() SecurityagentSecurityRequirementPackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityRequirementsInput`<sup>Optional</sup> <a name="SecurityRequirementsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput"></a>

```go
func SecurityRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentSecurityRequirementPackConfig <a name="SecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

&securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	KmsKeyId: *string,
	SecurityRequirements: interface{},
	Status: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name">Name</a></code> | <code>*string</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description">Description</a></code> | <code>*string</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements">SecurityRequirements</a></code> | <code>interface{}</code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status">Status</a></code> | <code>*string</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags for the security requirement pack. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `SecurityRequirements`<sup>Optional</sup> <a name="SecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements"></a>

```go
SecurityRequirements interface{}
```

- *Type:* interface{}

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

### SecurityagentSecurityRequirementPackSecurityRequirements <a name="SecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

&securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPackSecurityRequirements {
	Description: *string,
	Domain: *string,
	Evaluation: *string,
	Name: *string,
	Remediation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description">Description</a></code> | <code>*string</code> | Description of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain">Domain</a></code> | <code>*string</code> | Security domain this requirement belongs to. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation">Evaluation</a></code> | <code>*string</code> | How to evaluate compliance with this requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name">Name</a></code> | <code>*string</code> | Name of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation">Remediation</a></code> | <code>*string</code> | How to remediate non-compliance. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Security domain this requirement belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#domain SecurityagentSecurityRequirementPack#domain}

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation"></a>

```go
Evaluation *string
```

- *Type:* *string

How to evaluate compliance with this requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#evaluation SecurityagentSecurityRequirementPack#evaluation}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation"></a>

```go
Remediation *string
```

- *Type:* *string

How to remediate non-compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#remediation SecurityagentSecurityRequirementPack#remediation}

---

### SecurityagentSecurityRequirementPackTags <a name="SecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

&securityagentsecurityrequirementpack.SecurityagentSecurityRequirementPackTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#key SecurityagentSecurityRequirementPack#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#value SecurityagentSecurityRequirementPack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentSecurityRequirementPackSecurityRequirementsList <a name="SecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.NewSecurityagentSecurityRequirementPackSecurityRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityagentSecurityRequirementPackSecurityRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```go
func Get(index *f64) SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.NewSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation">ResetRemediation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation"></a>

```go
func ResetEvaluation()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRemediation` <a name="ResetRemediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation"></a>

```go
func ResetRemediation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput">EvaluationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput">RemediationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">Evaluation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">Remediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput"></a>

```go
func EvaluationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput"></a>

```go
func RemediationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```go
func Evaluation() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```go
func Remediation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentSecurityRequirementPackTagsList <a name="SecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.NewSecurityagentSecurityRequirementPackTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityagentSecurityRequirementPackTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get"></a>

```go
func Get(index *f64) SecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentSecurityRequirementPackTagsOutputReference <a name="SecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityagentsecurityrequirementpack"

securityagentsecurityrequirementpack.NewSecurityagentSecurityRequirementPackTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityagentSecurityRequirementPackTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



