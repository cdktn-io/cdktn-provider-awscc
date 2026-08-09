# `connectcampaignsCampaign` Submodule <a name="`connectcampaignsCampaign` Submodule" id="@cdktn/provider-awscc.connectcampaignsCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectcampaignsCampaign <a name="ConnectcampaignsCampaign" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign awscc_connectcampaigns_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaign(scope Construct, id *string, config ConnectcampaignsCampaignConfig) ConnectcampaignsCampaign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig">PutDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig">PutOutboundCallConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDialerConfig` <a name="PutDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig"></a>

```go
func PutDialerConfig(value ConnectcampaignsCampaignDialerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---

##### `PutOutboundCallConfig` <a name="PutOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig"></a>

```go
func PutOutboundCallConfig(value ConnectcampaignsCampaignOutboundCallConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.ConnectcampaignsCampaign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.ConnectcampaignsCampaign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.ConnectcampaignsCampaign_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.ConnectcampaignsCampaign_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectcampaignsCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectcampaignsCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectcampaignsCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig">DialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig">OutboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput">ConnectInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput">DialerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput">OutboundCallConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn">ConnectInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DialerConfig`<sup>Required</sup> <a name="DialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig"></a>

```go
func DialerConfig() ConnectcampaignsCampaignDialerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OutboundCallConfig`<sup>Required</sup> <a name="OutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig"></a>

```go
func OutboundCallConfig() ConnectcampaignsCampaignOutboundCallConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags"></a>

```go
func Tags() ConnectcampaignsCampaignTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a>

---

##### `ConnectInstanceArnInput`<sup>Optional</sup> <a name="ConnectInstanceArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput"></a>

```go
func ConnectInstanceArnInput() *string
```

- *Type:* *string

---

##### `DialerConfigInput`<sup>Optional</sup> <a name="DialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput"></a>

```go
func DialerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutboundCallConfigInput`<sup>Optional</sup> <a name="OutboundCallConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput"></a>

```go
func OutboundCallConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectInstanceArn`<sup>Required</sup> <a name="ConnectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn"></a>

```go
func ConnectInstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectcampaignsCampaignConfig <a name="ConnectcampaignsCampaignConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectInstanceArn: *string,
	DialerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig,
	Name: *string,
	OutboundCallConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn">ConnectInstanceArn</a></code> | <code>*string</code> | Amazon Connect Instance Arn. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig">DialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | The possible types of dialer config parameters. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name">Name</a></code> | <code>*string</code> | Amazon Connect Campaign Name. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig">OutboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | The configuration used for outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectInstanceArn`<sup>Required</sup> <a name="ConnectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn"></a>

```go
ConnectInstanceArn *string
```

- *Type:* *string

Amazon Connect Instance Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#connect_instance_arn ConnectcampaignsCampaign#connect_instance_arn}

---

##### `DialerConfig`<sup>Required</sup> <a name="DialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig"></a>

```go
DialerConfig ConnectcampaignsCampaignDialerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

The possible types of dialer config parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#dialer_config ConnectcampaignsCampaign#dialer_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Amazon Connect Campaign Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#name ConnectcampaignsCampaign#name}

---

##### `OutboundCallConfig`<sup>Required</sup> <a name="OutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig"></a>

```go
OutboundCallConfig ConnectcampaignsCampaignOutboundCallConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

The configuration used for outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#outbound_call_config ConnectcampaignsCampaign#outbound_call_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#tags ConnectcampaignsCampaign#tags}

---

### ConnectcampaignsCampaignDialerConfig <a name="ConnectcampaignsCampaignDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignDialerConfig {
	AgentlessDialerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig,
	PredictiveDialerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig,
	ProgressiveDialerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig">AgentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | Agentless Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig">PredictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | Predictive Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig">ProgressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | Progressive Dialer config. |

---

##### `AgentlessDialerConfig`<sup>Optional</sup> <a name="AgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig"></a>

```go
AgentlessDialerConfig ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

Agentless Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#agentless_dialer_config ConnectcampaignsCampaign#agentless_dialer_config}

---

##### `PredictiveDialerConfig`<sup>Optional</sup> <a name="PredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig"></a>

```go
PredictiveDialerConfig ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

Predictive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#predictive_dialer_config ConnectcampaignsCampaign#predictive_dialer_config}

---

##### `ProgressiveDialerConfig`<sup>Optional</sup> <a name="ProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig"></a>

```go
ProgressiveDialerConfig ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

Progressive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#progressive_dialer_config ConnectcampaignsCampaign#progressive_dialer_config}

---

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig {
	DialingCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity"></a>

```go
DialingCapacity *f64
```

- *Type:* *f64

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig {
	BandwidthAllocation: *f64,
	DialingCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>*f64</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `BandwidthAllocation`<sup>Optional</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation"></a>

```go
BandwidthAllocation *f64
```

- *Type:* *f64

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity"></a>

```go
DialingCapacity *f64
```

- *Type:* *f64

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig {
	BandwidthAllocation: *f64,
	DialingCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>*f64</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `BandwidthAllocation`<sup>Optional</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation"></a>

```go
BandwidthAllocation *f64
```

- *Type:* *f64

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity"></a>

```go
DialingCapacity *f64
```

- *Type:* *f64

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignOutboundCallConfig <a name="ConnectcampaignsCampaignOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignOutboundCallConfig {
	ConnectContactFlowArn: *string,
	AnswerMachineDetectionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig,
	ConnectQueueArn: *string,
	ConnectSourcePhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn">ConnectContactFlowArn</a></code> | <code>*string</code> | The identifier of the contact flow for the outbound call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig">AnswerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | The configuration used for answering machine detection during outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn">ConnectQueueArn</a></code> | <code>*string</code> | The queue for the call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber">ConnectSourcePhoneNumber</a></code> | <code>*string</code> | The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. |

---

##### `ConnectContactFlowArn`<sup>Required</sup> <a name="ConnectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn"></a>

```go
ConnectContactFlowArn *string
```

- *Type:* *string

The identifier of the contact flow for the outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#connect_contact_flow_arn ConnectcampaignsCampaign#connect_contact_flow_arn}

---

##### `AnswerMachineDetectionConfig`<sup>Optional</sup> <a name="AnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig"></a>

```go
AnswerMachineDetectionConfig ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

The configuration used for answering machine detection during outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#answer_machine_detection_config ConnectcampaignsCampaign#answer_machine_detection_config}

---

##### `ConnectQueueArn`<sup>Optional</sup> <a name="ConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn"></a>

```go
ConnectQueueArn *string
```

- *Type:* *string

The queue for the call.

If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#connect_queue_arn ConnectcampaignsCampaign#connect_queue_arn}

---

##### `ConnectSourcePhoneNumber`<sup>Optional</sup> <a name="ConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber"></a>

```go
ConnectSourcePhoneNumber *string
```

- *Type:* *string

The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#connect_source_phone_number ConnectcampaignsCampaign#connect_source_phone_number}

---

### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig {
	AwaitAnswerMachinePrompt: interface{},
	EnableAnswerMachineDetection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt">AwaitAnswerMachinePrompt</a></code> | <code>interface{}</code> | Enables detection of prompts (e.g., beep after after a voicemail greeting). |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection">EnableAnswerMachineDetection</a></code> | <code>interface{}</code> | Flag to decided whether outbound calls should have answering machine detection enabled or not. |

---

##### `AwaitAnswerMachinePrompt`<sup>Optional</sup> <a name="AwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt"></a>

```go
AwaitAnswerMachinePrompt interface{}
```

- *Type:* interface{}

Enables detection of prompts (e.g., beep after after a voicemail greeting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#await_answer_machine_prompt ConnectcampaignsCampaign#await_answer_machine_prompt}

---

##### `EnableAnswerMachineDetection`<sup>Optional</sup> <a name="EnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection"></a>

```go
EnableAnswerMachineDetection interface{}
```

- *Type:* interface{}

Flag to decided whether outbound calls should have answering machine detection enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#enable_answer_machine_detection ConnectcampaignsCampaign#enable_answer_machine_detection}

---

### ConnectcampaignsCampaignTags <a name="ConnectcampaignsCampaignTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

&connectcampaignscampaign.ConnectcampaignsCampaignTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#key ConnectcampaignsCampaign#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connectcampaigns_campaign#value ConnectcampaignsCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity"></a>

```go
func ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput"></a>

```go
func DialingCapacityInput() *f64
```

- *Type:* *f64

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity"></a>

```go
func DialingCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignDialerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignDialerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig">PutAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig">PutPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig">PutProgressiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig">ResetAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig">ResetPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig">ResetProgressiveDialerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentlessDialerConfig` <a name="PutAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig"></a>

```go
func PutAgentlessDialerConfig(value ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---

##### `PutPredictiveDialerConfig` <a name="PutPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig"></a>

```go
func PutPredictiveDialerConfig(value ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---

##### `PutProgressiveDialerConfig` <a name="PutProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig"></a>

```go
func PutProgressiveDialerConfig(value ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---

##### `ResetAgentlessDialerConfig` <a name="ResetAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig"></a>

```go
func ResetAgentlessDialerConfig()
```

##### `ResetPredictiveDialerConfig` <a name="ResetPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig"></a>

```go
func ResetPredictiveDialerConfig()
```

##### `ResetProgressiveDialerConfig` <a name="ResetProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig"></a>

```go
func ResetProgressiveDialerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig">AgentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig">PredictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig">ProgressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput">AgentlessDialerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput">PredictiveDialerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput">ProgressiveDialerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentlessDialerConfig`<sup>Required</sup> <a name="AgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig"></a>

```go
func AgentlessDialerConfig() ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a>

---

##### `PredictiveDialerConfig`<sup>Required</sup> <a name="PredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig"></a>

```go
func PredictiveDialerConfig() ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a>

---

##### `ProgressiveDialerConfig`<sup>Required</sup> <a name="ProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig"></a>

```go
func ProgressiveDialerConfig() ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a>

---

##### `AgentlessDialerConfigInput`<sup>Optional</sup> <a name="AgentlessDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput"></a>

```go
func AgentlessDialerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PredictiveDialerConfigInput`<sup>Optional</sup> <a name="PredictiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput"></a>

```go
func PredictiveDialerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProgressiveDialerConfigInput`<sup>Optional</sup> <a name="ProgressiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput"></a>

```go
func ProgressiveDialerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation">ResetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthAllocation` <a name="ResetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```go
func ResetBandwidthAllocation()
```

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity"></a>

```go
func ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput">BandwidthAllocationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthAllocationInput`<sup>Optional</sup> <a name="BandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```go
func BandwidthAllocationInput() *f64
```

- *Type:* *f64

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```go
func DialingCapacityInput() *f64
```

- *Type:* *f64

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```go
func BandwidthAllocation() *f64
```

- *Type:* *f64

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity"></a>

```go
func DialingCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation">ResetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthAllocation` <a name="ResetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```go
func ResetBandwidthAllocation()
```

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity"></a>

```go
func ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput">BandwidthAllocationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthAllocationInput`<sup>Optional</sup> <a name="BandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```go
func BandwidthAllocationInput() *f64
```

- *Type:* *f64

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```go
func DialingCapacityInput() *f64
```

- *Type:* *f64

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```go
func BandwidthAllocation() *f64
```

- *Type:* *f64

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity"></a>

```go
func DialingCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt">ResetAwaitAnswerMachinePrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection">ResetEnableAnswerMachineDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwaitAnswerMachinePrompt` <a name="ResetAwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt"></a>

```go
func ResetAwaitAnswerMachinePrompt()
```

##### `ResetEnableAnswerMachineDetection` <a name="ResetEnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection"></a>

```go
func ResetEnableAnswerMachineDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput">AwaitAnswerMachinePromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput">EnableAnswerMachineDetectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt">AwaitAnswerMachinePrompt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection">EnableAnswerMachineDetection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwaitAnswerMachinePromptInput`<sup>Optional</sup> <a name="AwaitAnswerMachinePromptInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput"></a>

```go
func AwaitAnswerMachinePromptInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAnswerMachineDetectionInput`<sup>Optional</sup> <a name="EnableAnswerMachineDetectionInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput"></a>

```go
func EnableAnswerMachineDetectionInput() interface{}
```

- *Type:* interface{}

---

##### `AwaitAnswerMachinePrompt`<sup>Required</sup> <a name="AwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt"></a>

```go
func AwaitAnswerMachinePrompt() interface{}
```

- *Type:* interface{}

---

##### `EnableAnswerMachineDetection`<sup>Required</sup> <a name="EnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection"></a>

```go
func EnableAnswerMachineDetection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignOutboundCallConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignOutboundCallConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectcampaignsCampaignOutboundCallConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig">PutAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig">ResetAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn">ResetConnectQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber">ResetConnectSourcePhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswerMachineDetectionConfig` <a name="PutAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig"></a>

```go
func PutAnswerMachineDetectionConfig(value ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---

##### `ResetAnswerMachineDetectionConfig` <a name="ResetAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig"></a>

```go
func ResetAnswerMachineDetectionConfig()
```

##### `ResetConnectQueueArn` <a name="ResetConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn"></a>

```go
func ResetConnectQueueArn()
```

##### `ResetConnectSourcePhoneNumber` <a name="ResetConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber"></a>

```go
func ResetConnectSourcePhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig">AnswerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput">AnswerMachineDetectionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput">ConnectContactFlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput">ConnectQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput">ConnectSourcePhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn">ConnectContactFlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn">ConnectQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber">ConnectSourcePhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnswerMachineDetectionConfig`<sup>Required</sup> <a name="AnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig"></a>

```go
func AnswerMachineDetectionConfig() ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a>

---

##### `AnswerMachineDetectionConfigInput`<sup>Optional</sup> <a name="AnswerMachineDetectionConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput"></a>

```go
func AnswerMachineDetectionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectContactFlowArnInput`<sup>Optional</sup> <a name="ConnectContactFlowArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput"></a>

```go
func ConnectContactFlowArnInput() *string
```

- *Type:* *string

---

##### `ConnectQueueArnInput`<sup>Optional</sup> <a name="ConnectQueueArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput"></a>

```go
func ConnectQueueArnInput() *string
```

- *Type:* *string

---

##### `ConnectSourcePhoneNumberInput`<sup>Optional</sup> <a name="ConnectSourcePhoneNumberInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput"></a>

```go
func ConnectSourcePhoneNumberInput() *string
```

- *Type:* *string

---

##### `ConnectContactFlowArn`<sup>Required</sup> <a name="ConnectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn"></a>

```go
func ConnectContactFlowArn() *string
```

- *Type:* *string

---

##### `ConnectQueueArn`<sup>Required</sup> <a name="ConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn"></a>

```go
func ConnectQueueArn() *string
```

- *Type:* *string

---

##### `ConnectSourcePhoneNumber`<sup>Required</sup> <a name="ConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber"></a>

```go
func ConnectSourcePhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignTagsList <a name="ConnectcampaignsCampaignTagsList" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectcampaignsCampaignTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get"></a>

```go
func Get(index *f64) ConnectcampaignsCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectcampaignsCampaignTagsOutputReference <a name="ConnectcampaignsCampaignTagsOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcampaignscampaign"

connectcampaignscampaign.NewConnectcampaignsCampaignTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectcampaignsCampaignTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



