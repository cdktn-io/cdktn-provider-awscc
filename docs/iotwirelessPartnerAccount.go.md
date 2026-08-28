# `iotwirelessPartnerAccount` Submodule <a name="`iotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.iotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessPartnerAccount <a name="IotwirelessPartnerAccount" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccount(scope Construct, id *string, config IotwirelessPartnerAccountConfig) IotwirelessPartnerAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk">PutSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse">PutSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate">PutSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked">ResetAccountLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId">ResetPartnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType">ResetPartnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk">ResetSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse">ResetSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate">ResetSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSidewalk` <a name="PutSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk"></a>

```go
func PutSidewalk(value IotwirelessPartnerAccountSidewalk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `PutSidewalkResponse` <a name="PutSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse"></a>

```go
func PutSidewalkResponse(value IotwirelessPartnerAccountSidewalkResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `PutSidewalkUpdate` <a name="PutSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate"></a>

```go
func PutSidewalkUpdate(value IotwirelessPartnerAccountSidewalkUpdate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountLinked` <a name="ResetAccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked"></a>

```go
func ResetAccountLinked()
```

##### `ResetPartnerAccountId` <a name="ResetPartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId"></a>

```go
func ResetPartnerAccountId()
```

##### `ResetPartnerType` <a name="ResetPartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType"></a>

```go
func ResetPartnerType()
```

##### `ResetSidewalk` <a name="ResetSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk"></a>

```go
func ResetSidewalk()
```

##### `ResetSidewalkResponse` <a name="ResetSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse"></a>

```go
func ResetSidewalkResponse()
```

##### `ResetSidewalkUpdate` <a name="ResetSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate"></a>

```go
func ResetSidewalkUpdate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.IotwirelessPartnerAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.IotwirelessPartnerAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.IotwirelessPartnerAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.IotwirelessPartnerAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotwirelessPartnerAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse">SidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate">SidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput">AccountLinkedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput">PartnerAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput">PartnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput">SidewalkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput">SidewalkResponseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput">SidewalkUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked">AccountLinked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId">PartnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType">PartnerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk"></a>

```go
func Sidewalk() IotwirelessPartnerAccountSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `SidewalkResponse`<sup>Required</sup> <a name="SidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse"></a>

```go
func SidewalkResponse() IotwirelessPartnerAccountSidewalkResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `SidewalkUpdate`<sup>Required</sup> <a name="SidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```go
func SidewalkUpdate() IotwirelessPartnerAccountSidewalkUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags"></a>

```go
func Tags() IotwirelessPartnerAccountTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a>

---

##### `AccountLinkedInput`<sup>Optional</sup> <a name="AccountLinkedInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput"></a>

```go
func AccountLinkedInput() interface{}
```

- *Type:* interface{}

---

##### `PartnerAccountIdInput`<sup>Optional</sup> <a name="PartnerAccountIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput"></a>

```go
func PartnerAccountIdInput() *string
```

- *Type:* *string

---

##### `PartnerTypeInput`<sup>Optional</sup> <a name="PartnerTypeInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput"></a>

```go
func PartnerTypeInput() *string
```

- *Type:* *string

---

##### `SidewalkInput`<sup>Optional</sup> <a name="SidewalkInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput"></a>

```go
func SidewalkInput() interface{}
```

- *Type:* interface{}

---

##### `SidewalkResponseInput`<sup>Optional</sup> <a name="SidewalkResponseInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput"></a>

```go
func SidewalkResponseInput() interface{}
```

- *Type:* interface{}

---

##### `SidewalkUpdateInput`<sup>Optional</sup> <a name="SidewalkUpdateInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput"></a>

```go
func SidewalkUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountLinked`<sup>Required</sup> <a name="AccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked"></a>

```go
func AccountLinked() interface{}
```

- *Type:* interface{}

---

##### `PartnerAccountId`<sup>Required</sup> <a name="PartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId"></a>

```go
func PartnerAccountId() *string
```

- *Type:* *string

---

##### `PartnerType`<sup>Required</sup> <a name="PartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType"></a>

```go
func PartnerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessPartnerAccountConfig <a name="IotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

&iotwirelesspartneraccount.IotwirelessPartnerAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountLinked: interface{},
	PartnerAccountId: *string,
	PartnerType: *string,
	Sidewalk: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk,
	SidewalkResponse: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse,
	SidewalkUpdate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked">AccountLinked</a></code> | <code>interface{}</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId">PartnerAccountId</a></code> | <code>*string</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType">PartnerType</a></code> | <code>*string</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse">SidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate">SidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountLinked`<sup>Optional</sup> <a name="AccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked"></a>

```go
AccountLinked interface{}
```

- *Type:* interface{}

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `PartnerAccountId`<sup>Optional</sup> <a name="PartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId"></a>

```go
PartnerAccountId *string
```

- *Type:* *string

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `PartnerType`<sup>Optional</sup> <a name="PartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType"></a>

```go
PartnerType *string
```

- *Type:* *string

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `Sidewalk`<sup>Optional</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk"></a>

```go
Sidewalk IotwirelessPartnerAccountSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `SidewalkResponse`<sup>Optional</sup> <a name="SidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse"></a>

```go
SidewalkResponse IotwirelessPartnerAccountSidewalkResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `SidewalkUpdate`<sup>Optional</sup> <a name="SidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate"></a>

```go
SidewalkUpdate IotwirelessPartnerAccountSidewalkUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

### IotwirelessPartnerAccountSidewalk <a name="IotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

&iotwirelesspartneraccount.IotwirelessPartnerAccountSidewalk {
	AppServerPrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `AppServerPrivateKey`<sup>Optional</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey"></a>

```go
AppServerPrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountSidewalkResponse <a name="IotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

&iotwirelesspartneraccount.IotwirelessPartnerAccountSidewalkResponse {
	AmazonId: *string,
	Arn: *string,
	Fingerprint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId">AmazonId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}. |

---

##### `AmazonId`<sup>Optional</sup> <a name="AmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId"></a>

```go
AmazonId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint"></a>

```go
Fingerprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

### IotwirelessPartnerAccountSidewalkUpdate <a name="IotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

&iotwirelesspartneraccount.IotwirelessPartnerAccountSidewalkUpdate {
	AppServerPrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `AppServerPrivateKey`<sup>Optional</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey"></a>

```go
AppServerPrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountTags <a name="IotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

&iotwirelesspartneraccount.IotwirelessPartnerAccountTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessPartnerAccountSidewalkOutputReference <a name="IotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccountSidewalkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessPartnerAccountSidewalkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey">ResetAppServerPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppServerPrivateKey` <a name="ResetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey"></a>

```go
func ResetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput">AppServerPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppServerPrivateKeyInput`<sup>Optional</sup> <a name="AppServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput"></a>

```go
func AppServerPrivateKeyInput() *string
```

- *Type:* *string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```go
func AppServerPrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessPartnerAccountSidewalkResponseOutputReference <a name="IotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccountSidewalkResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessPartnerAccountSidewalkResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId">ResetAmazonId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonId` <a name="ResetAmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId"></a>

```go
func ResetAmazonId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint"></a>

```go
func ResetFingerprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput">AmazonIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">AmazonId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonIdInput`<sup>Optional</sup> <a name="AmazonIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput"></a>

```go
func AmazonIdInput() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput"></a>

```go
func FingerprintInput() *string
```

- *Type:* *string

---

##### `AmazonId`<sup>Required</sup> <a name="AmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```go
func AmazonId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="IotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccountSidewalkUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessPartnerAccountSidewalkUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey">ResetAppServerPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppServerPrivateKey` <a name="ResetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey"></a>

```go
func ResetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput">AppServerPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppServerPrivateKeyInput`<sup>Optional</sup> <a name="AppServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput"></a>

```go
func AppServerPrivateKeyInput() *string
```

- *Type:* *string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```go
func AppServerPrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessPartnerAccountTagsList <a name="IotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccountTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessPartnerAccountTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get"></a>

```go
func Get(index *f64) IotwirelessPartnerAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessPartnerAccountTagsOutputReference <a name="IotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesspartneraccount"

iotwirelesspartneraccount.NewIotwirelessPartnerAccountTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessPartnerAccountTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



