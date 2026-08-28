# `ssmcontactsContactChannel` Submodule <a name="`ssmcontactsContactChannel` Submodule" id="@cdktn/provider-awscc.ssmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContactChannel <a name="SsmcontactsContactChannel" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel awscc_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

ssmcontactscontactchannel.NewSsmcontactsContactChannel(scope Construct, id *string, config SsmcontactsContactChannelConfig) SsmcontactsContactChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig">SsmcontactsContactChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig">SsmcontactsContactChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress">ResetChannelAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType">ResetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId">ResetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation">ResetDeferActivation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChannelAddress` <a name="ResetChannelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress"></a>

```go
func ResetChannelAddress()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetChannelType` <a name="ResetChannelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType"></a>

```go
func ResetChannelType()
```

##### `ResetContactId` <a name="ResetContactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId"></a>

```go
func ResetContactId()
```

##### `ResetDeferActivation` <a name="ResetDeferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation"></a>

```go
func ResetDeferActivation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

ssmcontactscontactchannel.SsmcontactsContactChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

ssmcontactscontactchannel.SsmcontactsContactChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

ssmcontactscontactchannel.SsmcontactsContactChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

ssmcontactscontactchannel.SsmcontactsContactChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmcontactsContactChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmcontactsContactChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContactChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput">ChannelAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput">ChannelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput">ContactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput">DeferActivationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress">ChannelAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType">ChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation">DeferActivation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ChannelAddressInput`<sup>Optional</sup> <a name="ChannelAddressInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput"></a>

```go
func ChannelAddressInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ChannelTypeInput`<sup>Optional</sup> <a name="ChannelTypeInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput"></a>

```go
func ChannelTypeInput() *string
```

- *Type:* *string

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput"></a>

```go
func ContactIdInput() *string
```

- *Type:* *string

---

##### `DeferActivationInput`<sup>Optional</sup> <a name="DeferActivationInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput"></a>

```go
func DeferActivationInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelAddress`<sup>Required</sup> <a name="ChannelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress"></a>

```go
func ChannelAddress() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ChannelType`<sup>Required</sup> <a name="ChannelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType"></a>

```go
func ChannelType() *string
```

- *Type:* *string

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `DeferActivation`<sup>Required</sup> <a name="DeferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation"></a>

```go
func DeferActivation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactChannelConfig <a name="SsmcontactsContactChannelConfig" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactscontactchannel"

&ssmcontactscontactchannel.SsmcontactsContactChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelAddress: *string,
	ChannelName: *string,
	ChannelType: *string,
	ContactId: *string,
	DeferActivation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress">ChannelAddress</a></code> | <code>*string</code> | The details that SSM Incident Manager uses when trying to engage the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType">ChannelType</a></code> | <code>*string</code> | Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId">ContactId</a></code> | <code>*string</code> | ARN of the contact resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation">DeferActivation</a></code> | <code>interface{}</code> | If you want to activate the channel at a later time, you can choose to defer activation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelAddress`<sup>Optional</sup> <a name="ChannelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress"></a>

```go
ChannelAddress *string
```

- *Type:* *string

The details that SSM Incident Manager uses when trying to engage the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#channel_address SsmcontactsContactChannel#channel_address}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#channel_name SsmcontactsContactChannel#channel_name}

---

##### `ChannelType`<sup>Optional</sup> <a name="ChannelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType"></a>

```go
ChannelType *string
```

- *Type:* *string

Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#channel_type SsmcontactsContactChannel#channel_type}

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId"></a>

```go
ContactId *string
```

- *Type:* *string

ARN of the contact resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}

---

##### `DeferActivation`<sup>Optional</sup> <a name="DeferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation"></a>

```go
DeferActivation interface{}
```

- *Type:* interface{}

If you want to activate the channel at a later time, you can choose to defer activation.

SSM Incident Manager can't engage your contact channel until it has been activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact_channel#defer_activation SsmcontactsContactChannel#defer_activation}

---



